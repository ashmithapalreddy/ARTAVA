import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "../pages/Splash/Splash";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home/Home";
import Welcome from "../pages/Onboarding/Welcome";
import PersonalInfo from "../pages/Onboarding/PersonalInfo";
import CycleInfo from "../pages/Onboarding/CycleInfo";
import Goals from "../pages/Onboarding/Goals";
import DailyLog from "../pages/DailyLog/DailyLog";
import Profile from "../pages/Profile/Profile";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />    
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Welcome />} />
        <Route path="/onboarding/personal" element={<PersonalInfo />} />
        <Route
  path="/onboarding/cycle"
  element={<CycleInfo />}
/>
        <Route path="/onboarding/goals" element={<Goals />} />
        <Route path="/daily-log" element={<DailyLog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
