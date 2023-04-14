import React, { useState } from 'react';
import { connect } from 'react-redux'
import socketIoClient from 'socket.io-client'
import BootstrapNavbar from './componenets/BootstrapNavbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ZoneList from './componenets/ZoneList';
import Refresh from './componenets/Refresh';
import Contact from './componenets/Contact';
import Post from './componenets/Post';
import DropZone from './componenets/DropZone';
import RideEstimate from './componenets/RideEstimate';
import PickupContext from './context/PickupContext';
import DropContext from './context/DropContext';
import PickupZone from './componenets/PickupZone';

function App() {
  const [pickupZone, setPickupZone] = useState(null);
  const [dropZone, setDropZone] = useState(null);
  return (
    <PickupContext.Provider value={{ pickupZone, setPickupZone }}>
      <DropContext.Provider value={{ dropZone, setDropZone }}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path ='/' component={ZoneList} />
              <Route exact path ='/pickupzone' component={PickupZone} />
              <Route exact path ='/dropzone' component={DropZone} />
              <Route exact path ='/estimateride' component={RideEstimate} />
              <Route exact path ='/Refresh' component={Refresh} />
              <Route exact path ='/Contact' component={Contact} />
              <Route exact path ='/Post' component={Post} />  
              <Route exact path ='/Post/:postId' component={Post} />
            </Switch>
          </div>
        </BrowserRouter>
      </DropContext.Provider>
    </PickupContext.Provider>
   );
}

export default App;
