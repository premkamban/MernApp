import React from "react";
import "../Incrediance.js/incrediance.css";
import PropTypes from "prop-types";

const Incrediance = (props) => {
  let Incrediancevar = null;
  switch (props.type) {
    case "bread-bottom":
      Incrediancevar = <div className="BreadBottom"></div>;
      break;
    case "bread-top":
      Incrediancevar = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case "meat":
      Incrediancevar = <div className="Meat"></div>;
      break;
    case "cheese":
      Incrediancevar = <div className="Cheese"></div>;
      break;
    case "bacon":
      Incrediancevar = <div className="Bacon"></div>;
      break;
    case "salad":
      Incrediancevar = <div className="Salad"></div>;
      break;

    default:
      Incrediancevar = null;
  }
  return Incrediancevar;
};

export default Incrediance;

Incrediance.propTypes = {
  type: PropTypes.string.isRequired,
};
