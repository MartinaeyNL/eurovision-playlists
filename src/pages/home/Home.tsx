import type {Component} from "solid-js";
import SearchBanner from "../../components/search-banner/SearchBanner";

const Home: Component = () => {
    return (
        <div>
            <SearchBanner />
            <span>Hi</span>
        </div>
    )
}

export default Home;