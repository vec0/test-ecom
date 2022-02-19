import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./services/serviceWorker";
import reportWebVitals from "./services/reportWebVitals";

import { Provider } from "react-redux";
import { BrowserRouter, useLocation } from "react-router-dom";
import { store, persister } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.min.css";

import App from "./app/app";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persister}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
