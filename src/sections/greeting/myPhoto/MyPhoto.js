import React from 'react';
import '../../../App.css';
import styles from './MyPhoto.module.css';

function MyPhoto() {
    return (
        <div className={styles.photo}>
            <img src="https://avatars.mds.yandex.net/get-pdb/216365/eb43844b-51d6-41a0-86c0-0f3c47da5b48/s375" alt=""/>
        </div>
    );
}

export default MyPhoto;
