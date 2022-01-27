import styles from "./Search.module.css";

function Search() {
    return (
        <div className={styles.search}>
            <div className={styles.search__column}>
                <input placeholder="What are you looking for?..."></input>
            </div>
            <div className={styles.search__column}>
                <i class="fas fa-search"></i>
            </div>
        </div>
    );
}

export default Search;
