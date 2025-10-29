import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import ContentGrid from './ContentGrid';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="main-content">
        <ContentGrid />
        <Sidebar />
      </div>
      
      
    </div>
  );
}

export default App;
