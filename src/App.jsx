import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Weblayout } from './layouts/Weblayout';
import { Homepage } from './pages/Homepage';
import { Profilepage } from './pages/Profilepage';
import { Projectpage } from './pages/Projectpage';
import { ContactPage } from './pages/ContactPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Weblayout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/profile" element={<Profilepage />} />
                    <Route path="/project" element={<Projectpage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
     </BrowserRouter> 
    );
}

export { App };
