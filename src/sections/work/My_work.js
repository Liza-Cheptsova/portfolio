import React from 'react';
import '../../App.css';
import styles from './My_work.module.css'
import Filter from "./Filter";
import Previews from "./Previews";

function Work() {
    return (
        <div className="LighterBg ">
            <div className="container">
                <Filter/>
                <Previews/>
                {/*<Previews img='https://avatars.mds.yandex.net/get-pdb/33827/f66978a3-8ec7-464a-a7bd-74a5fcc05a07/s1200' title='some work' descript='images'/>*/}
                {/*<Previews img='https://avatars.mds.yandex.net/get-pdb/1817329/bf9749bb-c74a-449c-ae59-a000f08b6034/s1200' title='some work' descript='images'/>*/}
                {/*<Previews img='https://avatars.mds.yandex.net/get-pdb/2491915/be6af928-1dd0-45fa-aa29-16a0bcc95b10/s1200' title='some work' descript='images'/>*/}
                {/*<Previews img='https://avatars.mds.yandex.net/get-pdb/1863838/93c451b5-c0cc-4125-8b7d-d19bfb46c8f1/s1200' title='some work' descript='images'/>*/}
                {/*<Previews img='https://im0-tub-ru.yandex.net/i?id=34095ba396021a311bdbe96e41252563-l&n=13' title='some work' descript='images'/>*/}
                {/*<Previews img='https://avatars.mds.yandex.net/get-pdb/1866711/55eb5ce2-fefe-4815-ad1b-6e04cfc0d599/s1200' title='some work' descript='images'/>*/}
                {/*<Previews img='https://im0-tub-ru.yandex.net/i?id=3e4493d873aa236638e161b0ad3e3f91-l&n=13' title='some work' descript='images'/>*/}
                {/*<Previews img='https://avatars.mds.yandex.net/get-pdb/231404/9816eb13-88cc-4590-94aa-c50aaae9d05e/s1200' title='some work' descript='images'/>*/}
                {/*<Previews img='https://avatars.mds.yandex.net/get-pdb/1942669/4c1d6436-45cf-4828-83a3-0133d1dc4bc7/s1200' title='some work' descript='images'/>*/}
            </div>
        </div>
    );
}

export default Work;
