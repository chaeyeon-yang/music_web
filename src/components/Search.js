import styles from "../stylesheets/Search.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search() {
    return (
        <div className={styles.search}>
            <div className={styles.search__column}>
                <input placeholder="What are you looking for?..."></input>
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    );
}

export default Search;
