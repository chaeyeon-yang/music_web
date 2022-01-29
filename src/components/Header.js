import { useState } from "react";
import styles from "../stylesheets/Header.module.css";

function Header() {
    const [login, setLogin] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.header__column}>
                <h1>MML</h1>
            </div>
            <div className={styles.header__column}>
                {login ? null : (
                    <div>
                        <span>로그인</span>
                        <span>회원가입</span>
                    </div>
                )}
            </div>
        </header>
    );
}
export default Header;
