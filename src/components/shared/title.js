import React from "react";
import PropTypes from "prop-types";
import "./title.scss";

const Title = ({ text }) => (
  <div className="title-container">
    <h1 className="title">{text}</h1>
  </div>
);

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
