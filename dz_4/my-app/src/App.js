import './App.css';
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";

function App() {
    return (
        <div className="App">
            <p className="p">1 задание</p>
            <AboutUs/>
            <p className="p">2 задание</p>
            <PortfolioPage/>
            <p className="p">3 задание</p>
            <ContactsPage/>
        </div>
    );
}

export default App;

