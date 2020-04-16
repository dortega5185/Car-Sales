import React from 'react';
import { removeFeature } from '../actions/app.Actions';
import { connect } from "react-redux";

const AddedFeature = ({feature, removeFeature}) => {
  console.log("AddedFeature", feature);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(feature)} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
