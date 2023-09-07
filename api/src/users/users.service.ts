import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private _userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const user = new this._userModel(createUserDto);
    return user.save();
  }

  findAll() {
    return this._userModel.find();
  }

  async findOne(id: string) {
    return this._userModel.find(user => user._id === id);
  }
  async findByEmail(email: string) {
    return this._userModel.find(user => user.email === email);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this._userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        updateUserDto,
      },
      {
        new: true,
      },
    );
  }
  remove(id: string) {
    return this._userModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
