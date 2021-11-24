import React, { useEffect } from "react";
import StandardLayout from "../Layouts/StandardLayout";
import { useAuth0 } from "@auth0/auth0-react";

import "./Styles/HomePage.css";

const HomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log("Este es el usuario logeado HOMEPAGE: ", user);
  }, []);

  return (
    <StandardLayout>
      <div className="HomePageContainer">
        <div className="container">
          <div className="row">
            <div className="col">
              Bienvenido, aqui se encuentran los diferentes twits
            </div>

            <div className="col">
              <button>Crear nuevo twit</button>
            </div>
          </div>

          <div className="row"></div>
        </div>
      </div>
    </StandardLayout>
  );
};

export default HomePage;
