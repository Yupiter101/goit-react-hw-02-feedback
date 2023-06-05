import React from "react";
import PropTypes from 'prop-types';



class Notification extends React.Component{
  render(){
    const {message} = this.props
      return(     
          <p>{message}</p>   
      )
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}