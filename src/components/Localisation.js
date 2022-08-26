import React from 'react'
import { useTranslation } from 'react-i18next';

const Localisation=()=>{
    const { i18n } = useTranslation();
  
      const onLanguageChange=(e)=>{
        i18n.changeLanguage(e.target.value)
      }
    return (
        <div style={{display: "flex",
        justifyContent: 'flex-end'}}>
          Select Langauge <select onChange={onLanguageChange}>
          <option value='en'>English</option>
          <option value="hin">Hindi</option>
          <option value="es">Spanish</option>
         </select>
          </div>
    )
}

export default Localisation