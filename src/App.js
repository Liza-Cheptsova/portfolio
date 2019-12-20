import React from 'react';
import './App.css';
import Header from "./sections/header/Header";
import First_screen from "./sections/greeting/First-screen";
import Work from "./sections/work/My_work";
import Services from "./sections/services/Services";
import Testimony from "./sections/testimony/Testimony";
import Articles from "./sections/articles/Articles";
import Freelancer from "./sections/freelancer/Freelancer";
import Contacts from "./sections/contacts/Contacts";
import Footer from "./sections/footer/Footer";



function App() {
  return (
    <div className="App">
      <Header/>
      <First_screen/>
      <Work/>
      <Services/>
      <Testimony/>
      <Articles/>
      <Freelancer/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
