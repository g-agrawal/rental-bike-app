import React from "react";

const PickupContext = React.createContext({
  pickupZone: null,
  setPickupZone: () => {}
});

export default PickupContext;