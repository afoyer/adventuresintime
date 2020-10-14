import React from "react";
import "./styles/app.scss";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import BookReadMore from "./components/BookReadMore";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();
  const notify = () => {
    toast.info("Page Not Found. Returning Home.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <HelmetProvider>
      <NavBar />
      <ToastContainer transition={Slide} />
      <Switch location={location} key={location.key}>
        <Route path="/books/:id" component={BookReadMore}></Route>
        <Route key="about" path="/about-the-author">
          <About />
        </Route>
        <Route key="home" path="/" exact>
          <HomePage />
        </Route>
        <Route
          path="/"
          render={() => {
            notify();
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </HelmetProvider>
  );
}

export default App;
