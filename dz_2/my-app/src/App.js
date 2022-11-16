import './App.css';

function AboutUs() {
    return (
        <>
            <h1>О нас</h1>
        </>
    )
}

function Portfolio() {
    return (
        <>
            <h1>Портфолио</h1>
        </>
    )
}


function App() {
    return (
        <div className="App">
            <AboutUs/>
            <Portfolio/>
        </div>
    );
}

export default App;
