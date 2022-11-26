import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";

function App() {
    return (
        <div className="App">
            <p className='text'>Задание №1</p>
            <AboutUs/>
            <p className='text'>Задание №2</p>
            <PortfolioPage/>
            <p className='text'>Задание №3</p>
            <ContactsPage/>
        </div>
    );
}

export default App;
