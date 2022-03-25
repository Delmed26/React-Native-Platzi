import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(prop) {
    const { firstName, lastName } = prop;
    return <Text>Hola {firstName} {lastName}</Text>
}

Saludar.defaultProps = {
    firstName: "Fernando",
    lastName: "Delgadillo"
}

Saludar.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
}