
import React, { Fragment } from "react";
import PropTypes from 'prop-types';


class Section extends React.Component {

  render() {
    const {title, children} = this.props;

    return(
      <Fragment>
        <h2>{title}</h2>
        {children}
      </Fragment>
      
    )
  }
}

export default Section;


Section.propTypes = {
  title: PropTypes.string.isRequired
}