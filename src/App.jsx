import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Weblayout } from './layouts/Weblayout';
import { Homepage } from './pages/Homepage';
import { Profilepage } from './pages/Profilepage';
import { Projectpage } from './pages/Projectpage';
import { ContactPage } from './pages/ContactPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Weblayout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/profile" element={<Profilepage />} />
                    <Route path="/project" element={<Projectpage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export { App };
