import React from 'react';
import '../../App.css';
import Title from "../title/Title";
import Button from "../button/Button";

function Freelancer() {
  return (
    <div className="LighterBg">
        <div className={"container"}>
            <div className={"wrapp"}>
                <Title title='Я на фрилансе'/>
                <Button text='подробнее'/>
            </div>
        </div>
    </div>
  );
}

export default Freelancer;
