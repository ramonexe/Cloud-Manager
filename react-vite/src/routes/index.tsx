import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}