import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./gral.scss";
import Saludar from "./components/Saludar";

function App() {
	/*
  const enviarSaludo = (nombre) => {
    console.log("Hola " + nombre);
  };
  */

	const data = {
		nombre: "Christiam Eduardo",
		apellidos: "Hernandez Oliver.",
		correo: "ing.crist@gmail.com",
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Mi primer componente relacionado con docker. bueno</h1>
				<h2>Hola mundo...</h2>
				<Saludar data={data}></Saludar>
			</header>
		</div>
	);
}

export default App;
