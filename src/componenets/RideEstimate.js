import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import PickupContext from '../context/PickupContext'
import DropContext from '../context/DropContext'

const RideEstimate = () => {
    const {pickupZone, setPickupZone} = useContext(PickupContext);
    const {dropZone, setDropZone} = useContext(DropContext);
  return (
    <div>
        <div className="card  d-flex flex-row" key={pickupZone.zoneId}>
            <div className="card-body">
                <h5 className="card-title text-primary">{pickupZone.name}</h5>
                <p className="card-text">{pickupZone.completeAddress}</p>                            
            </div>
            <div className="d-flex flex-column">
                <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Direction</button>
                <Link to="/zones">
                    <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Change</button>
                </Link>
            </div>
        </div>
        <div className="card  d-flex flex-row" key={dropZone.zoneId}>
            <div className="card-body">
                <h5 className="card-title text-primary">{dropZone.name}</h5>
                <p className="card-text">{dropZone.completeAddress}</p>                            
            </div>
            <div className="d-flex flex-column">
                <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Direction</button>
                <Link to="/zones">
                    <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Change</button>
                </Link>
            </div>
        </div>
        <div className="card  d-flex flex-row" key={101}>
            <div className="card-body">
                <h5 className="card-title text-primary">Estimated Fare</h5>
                <h5 className="card-title text-primary">ETA</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title text-primary">Rs. 100</h5>
                <h5 className="card-title text-primary">45 mins</h5>
            </div>
        </div>
        <div className="row">
                <Link to="/zones">
                    <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0 bottomleft">Cancel</button>
                </Link>
                <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0 bottomRightPosition" >Book Ride</button>
        </div>
    </div>
  );
};

export default RideEstimate;