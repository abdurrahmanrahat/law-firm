import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout.tsx";
import WithSuspense from "./components/Layout/WithSuspense.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";

const HomePage = lazy(() => import("./pages/Home/HomePage.tsx"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const ServicesPage = lazy(() => import("./pages/Services/ServicesPage"));
const ServiceDetailsPage = lazy(
  () => import("./pages/ServiceDetails/ServiceDetailsPage"),
);
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.tsx"),
);
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <WithSuspense>
                  <HomePage />
                </WithSuspense>
              }
            />
            <Route
              path="about"
              element={
                <WithSuspense>
                  <AboutPage />
                </WithSuspense>
              }
            />
            <Route
              path="services"
              element={
                <WithSuspense>
                  <ServicesPage />
                </WithSuspense>
              }
            />
            <Route
              path="services/:serviceSlug"
              element={
                <WithSuspense>
                  <ServiceDetailsPage />
                </WithSuspense>
              }
            />
            <Route
              path="contact"
              element={
                <WithSuspense>
                  <ContactPage />
                </WithSuspense>
              }
            />

            <Route
              path="*"
              element={
                <WithSuspense>
                  <NotFoundPage />
                </WithSuspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
