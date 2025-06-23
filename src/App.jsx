import './App.css';

import ScrollToAnchor from './components/ScrollToAnchor/ScrollToAnchor';
import Analytics from './components/Analytics/Analytics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './provider/theme/theme';

import Index from './screens/Index/Index';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';
import WorkDetails from './screens/WorkDetails/WorkDetails';
import OurWorks from './screens/OurWorks/OurWorks';
import Services from './screens/Services/Services';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToAnchor padding={10} />
        <Analytics />
        <Routes>
          <Route index element={<Index />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='works' element={<OurWorks />} />
          <Route path='work/details/:name' element={<WorkDetails />} />
          <Route path='services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
