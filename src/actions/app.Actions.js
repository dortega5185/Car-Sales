export const removeFeature = (addedFeat) => {
  console.log("removeFeature running");
  return { type: "REMOVE_FEATURE", payload: addedFeat };
};

export const buyItem = () => {
  console.log("buyItem running");
  return { type: "BUY_ITEM"};
};
