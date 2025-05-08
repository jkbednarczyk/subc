import {FC} from 'react';
import './GlobalStyles.css';
import { Navbar } from './components/navbar/Navbar.component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './components/home/HomePage.component';
import { PrivacyPolicy } from './components/privacyPolicy/PrivacyPolicy.component';
import { ContactPage } from './components/contact/ContactPage.component';
import { PurchasePage } from './components/purchase/PurchasePage.component';
import { ErrorPage } from './components/common/errorPage/ErrorPage.component';
import { METADATA } from './components/common/utils/metadata';
import { AboutPage } from './components/about/AboutPage.component';

interface AppProps {
  language: string;
}

const App: FC<AppProps> = (props) => {
  return (
    <Router basename="/">
     <Navbar language={props.language}/>
     <main className="main-content">
       <Routes>
         <Route path = "/" element = {<HomePage />} />
         <Route path = "/privacyPolicy" element = {<PrivacyPolicy />} />
         <Route path = "/about" element = {<AboutPage />} />
         <Route path = "/purchase" element = {<PurchasePage />} />
         <Route path = "/contact" element = {<ContactPage />} />
         <Route path="*" element={
            <ErrorPage 
              errorNumber={404}
              errorNameCode={"ERROR.404_NAME"}
              messageCode={"ERROR.404_MESSAGE"} 
              metaTitle={METADATA.ERROR_404_TITLE} 
              metaDescription={METADATA.ERROR_404_DESCRIPTION}/>} />
       </Routes>
     </main>
   </Router>
 );
};

export default App;
