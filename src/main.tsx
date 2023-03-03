import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TopNavbar from './Components/TopNavbar';
import Home from './Pages/Home';
import FreeAd from './Pages/FreeAd';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

import "@ionic/react/css/core.css";

// /* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
// import '@ionic/react/css/structure.css';
import "@ionic/react/css/typography.css";

// // /* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import PreviewAd from './Pages/PreviewAd';
import Ads from './Pages/Ads';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='container-fluid m-0 p-0'>
    <TopNavbar/>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="freeAd" element={<FreeAd/>}/>
      <Route path="ads/"element={<Ads/>}/>
      <Route path="previewAd" element={<PreviewAd/>}/>
    </Routes>
   </BrowserRouter>
   </div>
  </React.StrictMode>,
)
