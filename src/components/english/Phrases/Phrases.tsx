import styles from "./phrases.module.scss";

export const Phrases = () => (
    <div className={styles.wrapper}>
        <aside>
            <p>
                <ul>
                    <li>
                        You have charts which <span className={styles.green}>are laying</span>{" "}
                        horizontal.
                    </li>
                    <li>
                        My wife <span className={styles.green}>is</span> coocking now for
                        dinner tomorrow.
                    </li>
                    <li>
                        First, she <span className={styles.red}>fries</span> the rabbit.
                    </li>
                    <li>
                        It's a <span className={styles.red}>domesticated</span> rabbit, raised
                        in cage
                    </li>
                    <li>
                        Yesterday <span className={styles.green}>I went</span> to{" "}
                        <span className={styles.green}>the</span> village and covered some
                        plants.
                    </li>
                </ul>
            </p>
            <p>
                <span>Vocabulary</span>
                <ul>
                    <li>fried in a pan</li>
                    <li>steamed cabbage</li>
                    <li>beef stroganoff</li>
                    <li>a skiing family</li>
                </ul>
            </p>
        </aside>
        <div className={styles.simple}>
            Will you be at home tomorrow?
        </div>
        <aside>
            <h3>Prepositions of position</h3>
            <p>
                <ul>
                    <li>The shoes <span className={styles.green}> are </span> inside the box</li>
                    <li>My car <span className={styles.green}> is </span> outside the garden</li>
                    <li>The clouds are above the city</li>
                    <li>The temperature outside <span className={styles.green}>is</span> below 0 degree</li>
                    <li> My dog <span className={styles.green}> is </span> below the table</li>
                    <li>The bread is on to of <span className={styles.green}> the </span> table</li>
                    <li>That <span className={styles.green}> toy </span> is under the sofa</li>
                    <li>The flowers <span className={styles.green}> are </span> next to <span className={styles.green}> me </span> in the room</li>
                    <li>I sit between the windows</li>
                    <li>I sit between the window and the door</li>
                    <li>The armchair <span className={styles.green}> is </span> in the middle of the room</li>
                    <li>I can find an umbrella inside the <span className={styles.green}>drawer</span> next to <span
                        className={styles.green}> the entrance door</span></li>
                    <li> I can find a <span className={styles.green}>TV</span> on the wall <span className={styles.green}>in front of</span> the sofa inside the
                        living room
                    </li>

                </ul>
            </p>
            <p>
                <ul>
                    <li>I would put the walls around me</li>
                    <li>I would put change armchair under me</li>
                    <li>I would <span className={styles.green}>sit in from of</span> the big window</li>
                    <li>I would sit between the flower and the picture</li>
                    <li>I would <span className={styles.green}>put</span> a lamp next to the window</li>
                    <li>I would put a table in the middle of the room</li>
                    <li>I would <span className={styles.green}>sit in front of</span> the big window</li>
                </ul>
            </p>
            <p>
                <span>Vocabulary</span>
                <ul>
                    <li>entrance door</li>
                </ul>
            </p>
        </aside>
        <div className={styles.simple}>It won't bee so easy for them.</div>
        <aside>
            <p>
                <span>Vocabulary</span>
                <ul>
                    <li>end table</li>
                    <li>cabinets</li>
                    <li>throw pillow</li>
                    <li>rug</li>
                    <li>desk</li>
                    <li>unhealthy</li>
                    <li>dinner table</li>
                </ul>
            </p>
        </aside>
    </div>
);
