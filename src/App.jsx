import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gradient-to-br from-purple-800 to-indigo-900 min-h-screen">
            <Landing />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
