import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "../pages/home/home";
import DetailsItem from "../pages/details_item/details_item";
import MyCart from "../pages/my_cart/my_cart";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details_item' element={<DetailsItem />} />
            <Route path='/my_cart' element={<MyCart/>} />
        </Routes>
    )
}

export default AppRoutes;