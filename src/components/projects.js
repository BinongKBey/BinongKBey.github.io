import React from 'react';
import styles from './Styles/Projects.module.css'

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                Projects
            </div>
            <div className={styles.list}>
                <div className={styles.item}>
                    <img src={require('../img/project-1.png')} alt="project-1" />
                    <div className={styles.itembody}>
                        <p>Chatroom is a chat Web Application that allows users to chat in realtime using socket.io</p>
                        <button className={styles.btn}><a href="http://bkbchatroom.herokuapp.com/">Check it here!</a></button>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={require('../img/project-2.jpg')} alt="project-2" />
                    <div className={styles.itembody}>
                        <p>RoboGen is a avatar generator Web Application that allows users to generate an avatar based on their name.</p>
                        <button className={styles.btn}><a href="http://bkb-robogen.herokuapp.com/">Check it here!</a></button>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={require('../img/project-3.jpg')} alt="project-3" />
                    <div className={styles.itembody}>
                        <p>Movie Search Engine is a Web Application that allows users to search any movie. It uses OMDB api.</p>
                        <button className={styles.btn}><a href="https://binongkbey.github.io/MovieSearchEngine/">Check it here!</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;