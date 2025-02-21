import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import HomePage from './landing_page/home/HomePage';
import{BrowserRouter, Routes, Route} from 'react-router-dom'


import PricingPage from './landing_page/pricing/PricingPage'
import ProductsPage from './landing_page/products/ProductsPage';
import SupportPage from './landing_page/support/SupportPage';
import Noteexist from './Notexist';

import AboutPage from './landing_page/about/AboutPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
<Routes>
 <Route path='/' element = {<HomePage/>}/>
 <Route path='/about' element = {<AboutPage/>}/>
 <Route path='/products' element = {<ProductsPage/>}/>
 <Route path='/pricing' element = {<PricingPage/>}/>
 <Route path='/support' element = {<SupportPage/>}/>
 <Route path='*' element = {<Noteexist/>}/>
 </Routes>
 </BrowserRouter>

</>
);


