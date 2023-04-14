import React from "react";

const DropContext = React.createContext({
  dropZone: null,
  setDropZone: () => {}
});

export default DropContext;