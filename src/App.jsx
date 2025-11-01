import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>aibwgo</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
