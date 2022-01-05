import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import App from "./views/App";
import LandingPage from "./views/LandingPage";
import MoviesList from "./views/MoviesList";
import About from "./views/About";
import Favourites from "./views/Favourites";
import Contact from "./views/Contact";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<App />}>
            <Route path="/app/about" element={<About />} />
            <Route path="/app/movies" element={<MoviesList />} />
            <Route path="/app/favourites" element={<Favourites />} />
            <Route path="/app/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
