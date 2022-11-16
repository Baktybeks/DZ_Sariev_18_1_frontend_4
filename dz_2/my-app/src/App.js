import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";

function Portfolio() {
    return (
        <>
            <h1>Портфолио</h1>
        </>
    )
}

function App() {
    const text = {
        title: "hello",
        subtitle: "lorem lorem lorem"
    }
    return (
        <div className="App">
            <AboutUs aboutUs={text}/>
            <Portfolio/>
        </div>
    );
}

export default App;
