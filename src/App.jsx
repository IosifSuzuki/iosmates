import './App.css';

import ScrollToAnchor from './components/ScrollToAnchor/ScrollToAnchor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './screens/Index/Index';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';
import WorkDetails from './screens/WorkDetails/WorkDetails';

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route index element={<Index />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
        <Route path='work/details/:name' element={<WorkDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
