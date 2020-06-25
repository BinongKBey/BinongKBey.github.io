import React from 'react';
import styles from './Styles/Skills.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <div className={styles.Skills}>
            <div className={styles.text}>
                Skills
            </div>
            <ul className={styles.skillList}>
                <li>
                    <h1 className={styles.skillItem}>HTML</h1>
                    <div>
                        <FontAwesomeIcon className={styles.stars1} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars2} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars3} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars4} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars5} icon={faStar} size='lg' color="grey" />
                    </div>
                </li>
                <li>
                    <h1 className={styles.skillItem}>CSS</h1>
                    <div>
                        <FontAwesomeIcon className={styles.stars1} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars2} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars3} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars4} icon={faStar} size='lg' color="grey" />
                        <FontAwesomeIcon className={styles.stars5} icon={faStar} size='lg' color="grey" />
                    </div>
                </li>
                <li>
                    <h1 className={styles.skillItem}>JavaScript</h1>
                    <div>
                        <FontAwesomeIcon className={styles.stars1} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars2} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars3} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars4} icon={faStar} size='lg' color="grey" />
                        <FontAwesomeIcon className={styles.stars5} icon={faStar} size='lg' color="grey" />
                    </div>
                </li>
                <li>
                    <h1 className={styles.skillItem}>React</h1>
                    <div>
                        <FontAwesomeIcon className={styles.stars1} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars2} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars3} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars4} icon={faStar} size='lg' color="grey" />
                        <FontAwesomeIcon className={styles.stars5} icon={faStar} size='lg' color="grey" />
                    </div>
                </li>
                <li>
                    <h1 className={styles.skillItem}>Node.js</h1>
                    <div>
                        <FontAwesomeIcon className={styles.stars1} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars2} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars3} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars4} icon={faStar} size='lg' color="grey" />
                        <FontAwesomeIcon className={styles.stars5} icon={faStar} size='lg' color="grey" />
                    </div>
                </li>
                <li>
                    <h1 className={styles.skillItem}>Machine Learning</h1>
                    <div>
                        <FontAwesomeIcon className={styles.stars1} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars2} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars3} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars4} icon={faStar} size='lg' color="grey" />
                        <FontAwesomeIcon className={styles.stars5} icon={faStar} size='lg' color="grey" />
                    </div>
                </li>
                <li>
                    <h1 className={styles.skillItem}>C, C++, Java</h1>
                    <div>
                        <FontAwesomeIcon className={styles.stars1} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars2} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars3} icon={faStar} size='lg' color="white" />
                        <FontAwesomeIcon className={styles.stars4} icon={faStar} size='lg' color="grey" />
                        <FontAwesomeIcon className={styles.stars5} icon={faStar} size='lg' color="grey" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Skills;