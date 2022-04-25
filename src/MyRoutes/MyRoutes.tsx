import React from 'react';
import {Routes, Route} from 'react-router-dom'
import AddUser from '../components/AddUser/AddUser';
import EditUser from '../components/EditUser/EditUser';
import ListUser from '../components/ListUser/ListUser';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MyRoutes = () => {
    return (
     <>
         <Header />
        <Routes>
            
            
            <Route path = '/add' element={<AddUser />} />
            <Route path = '/list' element={<ListUser />} />
            <Route path='/edit/:id' element={<EditUser/> } />            
        </Routes>
        <Footer />
        </>
       
    );
};

export default MyRoutes;