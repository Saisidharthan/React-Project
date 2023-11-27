import React from 'react'
import Login from '../components/Login/Login';
import Signup from '../components/SignUp/SignUp';
import { Routes,Route}from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Cart from '../components/Cart/Cart';
import PrivateRoute from './PrivateRoute';

const Routing = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>
                } />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default Routing