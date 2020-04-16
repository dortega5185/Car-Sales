import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
// import { connect } from "react-redux";
// import { removeFeature, buyItem } from "./actions/app.Actions";

const App = () => {
  // console.log("App state", props);

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App

// const mapStateToProps = state => {
//   return {
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//     features: state.car.features
//   }
// }

// export default connect(mapStateToProps, {
//   removeFeature,
//   buyItem,
// })(App);
