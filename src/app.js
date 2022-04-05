import React from "react";

import NewNav from "./components/NewNav";
import Footer from "./components/footer";
import Loading from "./components/Loading";
import { Fragment } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import "./main.css";


const App = () => {
  const {isLoading} = useAuth0()

  if (isLoading) {
    return <Loading/>
  }
  return (
    <Fragment>
      <NewNav />
      <Footer />
    </Fragment>
  );
};

export default App;
