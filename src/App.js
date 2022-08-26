import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Localisation from "./components/Localisation";

function App() {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((resp) => resp.json())
      .then((resp) => setUser(resp.data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Localisation />
      {user && (
        <div style={{ margin: "0 auto", width: 400 }}>
          <div>
            {" "}
            <h2>{t("welcome", { username: user.first_name })}</h2>
            <p>
              {t("user.id")} : {user.id}
            </p>
            <p>
              {t("user.email")} : {user.email}
            </p>
            <p>
              {t("user.first_name")} : {user.first_name}
            </p>
            <p>
              {t("user.last_name")} : {user.last_name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
