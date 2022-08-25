import React from "react";
import ReactDOM from "react-dom";
import settings from "@salesforce/design-system-react/components/settings";

import App from "./App";

import "./styles.css";
import { IconSettings } from "@salesforce/design-system-react";
import standardSprite from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';

function AppContainer() {
  return (
    <div className="App">
      <IconSettings standardSprite={standardSprite}>
        <App />
      </IconSettings>
    </div>
  );
}


settings.setAppElement("#root");

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
