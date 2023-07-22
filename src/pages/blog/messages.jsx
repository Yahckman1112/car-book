import React from 'react';
import styles from './blog.module.scss'

function Messages(props) {
    return (
        <div className={styles.msg}>
           <div className={styles.msg_para}>
            <div className={styles.msg_para_1}>A</div>
            <div className={styles.msg_para_2}> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, deleniti?</div>

           </div>
        </div>
    );
}

export default Messages;