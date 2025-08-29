import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import TaskTrackerPage from "./pages/TaskTrackerPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task-tracker" element={<TaskTrackerPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
