import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Brands } from './pages/Brands';
import { BunndelsAndKits } from './pages/BunndelsAndKits';
import { HairCare } from './pages/HairCare';
import { Offers } from './pages/Offers';
import { PersonalCare } from './pages/PersonalCare';
import { SkinCare } from './pages/SkinCare';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { TermsOfUse } from './pages/TermsOfUse';
import { Return } from './pages/Return';
import { Ageal } from './brandsPages/Ageal';
import { Boduim } from './brandsPages/Boduim';
import { Cica } from './brandsPages/Cica';
import { Melatex } from './brandsPages/Melatex';
import { Sebaclare } from './brandsPages/Sebaclare';
import { Straline } from './brandsPages/Straline';
import { Trix } from './brandsPages/Trix';
import { Urepar } from './brandsPages/Urepar';
import { Uvepro } from './brandsPages/Uvepro';
import { Checkout } from './pages/CheckOut';

export const App = () => {
  const Routing = createBrowserRouter([{
    path: "/", element: <Layout />,
    children: [{
      index: true, element: <Home />
    },
    {
      path: "aboutus", element: <AboutUs />
      },
      {
        path: "brands", element: <Brands />
      },
      {
        path: "bunndelandkits", element: <BunndelsAndKits />
      },
      {
        path: "haircare", element: <HairCare />
      },
      {
        path: "offers", element: <Offers />
      },
      {
        path: "personalcare", element: <PersonalCare />
      },
      {
        path: "skincare", element: <SkinCare />
      },
      {
        path: "cart", element: <Cart />
      },
      {
        path: "login", element: <Login />
      },
      {
        path: "contact", element: <Contact />
      },
      {
        path: "termsofuse", element: <TermsOfUse />
      },
      {
        path: "return", element: <Return />
      },
      {
        path: "ageal", element: <Ageal />
      },
     {
        path: "boduim", element: <Boduim />
      },
     {
        path: "cica", element: <Cica />
      },
     {
        path: "melatex", element: <Melatex />
      },
     {
        path: "sebaclare", element: <Sebaclare />
      },
     {
        path: "straline", element: <Straline />
      },
     {
        path: "trix", element: <Trix />
      },
      {
        path: "urepar", element: <Urepar />
      },
      {
        path: "uvepro", element: <Uvepro />
      },
      {
        path: "checkout", element: <Checkout />
      }
    ]
  }])
  return (
    <RouterProvider router={Routing} />
    
  )
};
