import Fetch from "./API/Fetch";
import Head from "./Components/Head";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Repo from "./Components/Repo";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <ErrorBoundary>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Head />} />
        <Route path="/repos" element={<Fetch />} />
        <Route path="/repos/:name" element={<Repo />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to='/404' /> } />
      </Routes>
    </>
     </ErrorBoundary>
  );
}

export default App;
