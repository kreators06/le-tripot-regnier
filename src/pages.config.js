import Home from './pages/Home';
import Engagements from './pages/Engagements';
import Equipe from './pages/Equipe';
import Galerie from './pages/Galerie';
import Capacites from './pages/Capacites';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Engagements": Engagements,
    "Equipe": Equipe,
    "Galerie": Galerie,
    "Capacites": Capacites,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};