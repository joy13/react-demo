import React, { Component } from "react";
import "./Message.css";
import PropTypes from "prop-types";

function Message(props) {
  return ( 
  <div className="message">
      <span>{props.id}: {props.value}</span>
  </div>
  );
}

Message.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

export default Message;