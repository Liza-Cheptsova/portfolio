import React from 'react';
import '../../App.css';
import Slider from "./Slider";
import Title from "../title/Title";

function Testimony() {
  return (
    <div className={'LighterBg'}>
      <div className={'container'}>
      <div className={'wrapp'}>
          <Title title='Слайдер'/>
        <Slider/>
      </div>
      </div>
    </div>
  );
}

export default Testimony;
