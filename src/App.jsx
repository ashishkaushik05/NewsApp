import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News pageSize={5} country="in" category="general" />} />
        <Route path="/Business" element={<News pageSize={5} country="in" category="business" />} />
        <Route path="/Entertainment" element={<News pageSize={5} country="in" category="entertainment" />} />
        <Route path="/Health" element={<News pageSize={5} country="in" category="health" />} />
        <Route path="/Science" element={<News pageSize={5} country="in" category="science" />} />
        <Route path="/Sports" element={<News pageSize={5} country="in" category="sports" />} />
        <Route path="/Technology" element={<News pageSize={5} country="in" category="technology" />} />
      </Routes>
    </Router>
  );
};
