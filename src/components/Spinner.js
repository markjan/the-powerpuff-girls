import React from "react";
import PropTypes from "prop-types";
import './Spinner.scss';

export default function Spinner(props) {
  const size = (props.size || 100);
  return (<div className="spinner" data-test-id="spinner" style={{backgroundColor: "#ffffff"}} >
    <img src="assets/spinner.svg" width={size} height={size} srcSet="assets/spinner.svg" alt="please be patient ..." />
  </div>);
}

Spinner.propTypes = {
  size: PropTypes.number,
};