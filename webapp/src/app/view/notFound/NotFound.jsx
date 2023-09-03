import { React } from "react";
import './NotFound.css';
import { Link } from "react-router-dom";
export default function NotFound () {
    return (
        <>
        <div className="flex justify-content-center">
            <div className="smg-icon"></div>
            <span className="Link">
                <Link to='/'> Voltar </Link>
            </span>
        </div>
        <div className='flex justify-content-end flex-column align-items-center h-full'>
            <div className="not-found-image w-full"></div>
            <div><h2 className="m-0">Página não encontrada</h2></div>
        </div>
        </>
    )
} 