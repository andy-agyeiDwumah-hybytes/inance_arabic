import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </StrictMode>
);
