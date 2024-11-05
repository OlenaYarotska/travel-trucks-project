import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import Navigation from "./Navigation/Navigation";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
import { Container } from "./App.styled";
import Loader from "./Loader/Loader";

function App() {
  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
  const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage'));
  const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} >
          <Route index element={<Navigate to="features" />} />
            <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </Container>
  )
}

export default App;
