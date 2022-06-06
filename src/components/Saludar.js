import React from "react";
//import PropTypes from "prop-types";

export default function Saludar(props) {
	const { nombre, apellidos, correo } = props.data;

	return (
		<div className="saludar">
			<p className="nombre">
				{nombre} {apellidos}
			</p>
			<p className="correo">{correo}</p>
		</div>
	);
}

/*
Saludar.PropTypes = {
	nombre: PropTypes.string.isRequired,
	apellidos: PropTypes.string.isRequired,
	correo: PropTypes.string,
};
*/
