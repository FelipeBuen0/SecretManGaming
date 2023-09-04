import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private _data: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const user = new this._data(createUserDto);
    return user.save();
  }

  findAll() {
    return this._data.find();
  }

  findOne(id: string) {
    return this._data.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this._data.findByIdAndUpdate(
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
    return this._data
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
