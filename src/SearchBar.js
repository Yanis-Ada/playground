import { Search } from 'lucide-react';

function SearchBar() {
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="SEARCH BAR" 
                className="search-input"
            />
            <button className="search-button">
                <Search size={30} color="black"/>
            </button>
        </div>
    );
}

export default SearchBar;