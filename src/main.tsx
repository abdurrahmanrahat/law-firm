import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout.tsx";
import "./index.css";
import AboutPage from "./pages/About/AboutPage.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import ServiceDetailsPage from "./pages/ServiceDetails/ServiceDetailsPage.tsx";
import ServicesPage from "./pages/Services/ServicesPage.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route
              path="services/:serviceSlug"
              element={<ServiceDetailsPage />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
