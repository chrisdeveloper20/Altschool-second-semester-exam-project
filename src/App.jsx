import Fetch from "./API/Fetch";
import Head from "./Components/Head";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Repo from "./Components/Repo";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./Components/NotFound";
import FallBack from "./Components/FallBack";
function App() {

  const handleError =(error, errorInfo) =>{
    console.warn(error, errorInfo);
  }
  return (
    <ErrorBoundary FallbackComponent={FallBack}
        onError={handleError}
    >
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Head />} />
          <Route path="/repos" element={<Fetch />} />
          <Route path="/repos/:name" element={<Repo />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </>
    </ErrorBoundary>
  );
}

export default App;
