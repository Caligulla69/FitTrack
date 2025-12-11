import "nprogress/nprogress.css";
import MealTrackingForm from "./pages/meal/mealForm";
import PremiumAuthForm from "./pages/meal/login";

import FitnessChatbot from "./pages/meal/chatbot";
import FitnessAuthForm from "./pages/meal/login";

import ModernDashboard from "./pages/meal/ModernDashboard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/car/homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PremiumAuthForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<ModernDashboard />} />
        <Route path="/chat" element={<FitnessChatbot />} />
        <Route path="/form" element={<MealTrackingForm />} />
       
      </Routes>
    </>
  );
};

export default App;
