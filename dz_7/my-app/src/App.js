import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsPage from "./pages/postsPage/PostsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/menu/Menu";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route index element={<PostsPage/>}/>
                <Route index element={<PostsPage/>}/>
            </Routes>
        </BrowserRouter>


    );
}

export default App;
