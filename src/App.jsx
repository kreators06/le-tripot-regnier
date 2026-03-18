// ─── App ──────────────────────────────────────────────────────────────────────
// Routeur principal de l'application Le Tripot Régnier

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Histoire from './pages/Histoire';
import Galerie from './pages/Galerie';
import Capacites from './pages/Capacites';
import Engagements from './pages/Engagements';
import Contact from './pages/Contact';
import CGU from './pages/CGU';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import PageNotFound from './lib/PageNotFound';

const LayoutWrapper = ({ children, currentPageName }) => (
  <Layout currentPageName={currentPageName}>{children}</Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<LayoutWrapper currentPageName="Home"><Home /></LayoutWrapper>} />
        <Route path="/Histoire" element={<LayoutWrapper currentPageName="Histoire"><Histoire /></LayoutWrapper>} />
        <Route path="/Galerie" element={<LayoutWrapper currentPageName="Galerie"><Galerie /></LayoutWrapper>} />
        <Route path="/Capacites" element={<LayoutWrapper currentPageName="Capacites"><Capacites /></LayoutWrapper>} />
        <Route path="/Engagements" element={<LayoutWrapper currentPageName="Engagements"><Engagements /></LayoutWrapper>} />
        <Route path="/Contact" element={<LayoutWrapper currentPageName="Contact"><Contact /></LayoutWrapper>} />
        <Route path="/CGU" element={<LayoutWrapper currentPageName="CGU"><CGU /></LayoutWrapper>} />
        <Route path="/MentionsLegales" element={<LayoutWrapper currentPageName="MentionsLegales"><MentionsLegales /></LayoutWrapper>} />
        <Route path="/PolitiqueConfidentialite" element={<LayoutWrapper currentPageName="PolitiqueConfidentialite"><PolitiqueConfidentialite /></LayoutWrapper>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;