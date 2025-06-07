import '../App.css'
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const EmptyComponent = ({message})=> {

  return (
    <div>
        <div>
            <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLNLbFmOl-wuybKGc6IrdKYGPxe62xr-wYA&s"
            height={200}
            width={188}
            alt="404"
            /> 
        </div>
        <div className='text-center'>{message}</div>
    </div>
)
}

export default EmptyComponent