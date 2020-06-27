//? Dependicies
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//! css files
import "./App.css";

//todo context
// import AuthContextProvider from "./context/AuthContext";

//* components

//utils

//pages
import Register from "./components/Register_Login/Register";
import Login from "./components/Register_Login/Login";
import Forgot from "./components/Register_Login/Login/Forgot";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Pages/Error";
import AboutPage from "./components/Pages/About";
import Course from "./components/Pages/Courses";

import Teachers from "./components/Pages/Teachers/Teachers";
import SingleTeacher from "./components/Pages/Teachers/TeachersSingle";

import Events from "./components/Pages/Events";
import SingleEvent from "./components/Pages/Events/SingleEvent";

//layout
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

//user
import UserDashboard from './components/UserPanel/UserDashboard'

class App extends Component {
  render() {
    return (
      // <AuthContextProvider>
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot" component={Forgot} />

            <Route exact path="/contact" component={Contact} />
            <Route exact path="/pages/error" component={Error} />
            <Route exact path="/pages/about" component={AboutPage} />
            <Route exact path="/pages/course" component={Course} />

            <Route exact path="/pages/teachers" component={Teachers} />
            <Route exact path="/pages/teacher" component={SingleTeacher} />

            <Route exact path="/pages/events" component={Events} />
            <Route exact path="/pages/event" component={SingleEvent} />

            
            <Route exact path="/user_dashboard" component={UserDashboard} />


            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />

            <Footer />
          </div>
        </BrowserRouter>
      // </AuthContextProvider>
    );
  }
}

export default App;
