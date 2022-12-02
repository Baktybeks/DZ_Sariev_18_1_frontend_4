import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/menu/Menu";
import PostsPage from "./pages/postsPage/PostsPage";
import CommentsPage from "./pages/commentsPage/CommentsPage";
import PhotosPage from "./pages/photosPage/PhotosPage";
import UsersPage from "./pages/usersPage/UsersPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route index element={<PostsPage/>}/>
                <Route path="comments" element={<CommentsPage/>}/>
                <Route path="photos" element={<PhotosPage/>}/>
                <Route path="users" element={<UsersPage/>}/>
                <Route path="contacts" element={<ContactsPage/>}/>
            </Routes>
        </BrowserRouter>


    );
}

export default App;
