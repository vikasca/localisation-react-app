import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
  return (
    <ul>
      <li> <a class="active" href="#home"> {t("home")} </a> </li>
      <li>  <a href="#news">{t("news")}</a></li>
      <li> <a href="#contact">{t("contact")}</a> </li>
      <li> <a href="#about">{t("about")}</a></li>
    </ul>
  );
};

export default Header;
