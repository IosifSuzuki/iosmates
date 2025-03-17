import './App.css';

import ScrollToAnchor from './components/ScrollToAnchor/ScrollToAnchor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './screens/Index/Index';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path='iosmates'>
          <Route index element={<Index />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
