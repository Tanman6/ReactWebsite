import React from "react";

import { NewNav, Footer, Loading} from "./components";

import { useAuth0 } from "@auth0/auth0-react";

import "./main.css";

const App = () => {
  const {isLoading} = useAuth0()

  if (isLoading) {
    return <Loading/>
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NewNav />
      <Footer />
    </div>
  );
};

export default App;
