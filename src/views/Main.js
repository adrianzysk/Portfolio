import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import App from "./App";
import LandingPage from "./LandingPage";
import MoviesList from "./MoviesList";
import About from "./About";
import Favourites from "./Favourites";
import Contact from "./Contact";
import "./Main.scss";

function Main() {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<App />}>
            <Route path="/app/about" element={<About />} />
            <Route path="/app/movies" element={<MoviesList />} />
            <Route path="/app/favourites" element={<Favourites />} />
            <Route path="/app/contact" element={<Contact />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Main;
