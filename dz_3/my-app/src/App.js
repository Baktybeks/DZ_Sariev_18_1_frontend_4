import './App.css';
import AlertHello from "./pages/alertHello/AlertHello";
import ClassComponentOne from "./pages/classComponentOne/ClassComponentOne";
import ClassComponentTwo from "./pages/classComponentTwo/ClassComponentTwo";


function App() {
    const user = {name: "Anna", age: 19}

    return (
        <div className="App">
            <ClassComponentOne user={user}/>
            <ClassComponentTwo user={user}/>
            <AlertHello/>
        </div>
    );
}

export default App;
