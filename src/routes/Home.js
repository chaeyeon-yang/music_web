import Header from "../components/Header";
import Search from "../components/Search";
import Recommend from "../components/Recommend";
import Ranking from "../components/Ranking";
import Playlist from "../components/Playlist";
function Home() {
    return (
        <div>
            <Header />
            <Search />
            <Recommend />
            <Ranking />
            <Playlist />
        </div>
    );
}
export default Home;
