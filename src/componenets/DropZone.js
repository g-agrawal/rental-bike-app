import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import deleteImage from '../Images/deleteImage.png'
import editImage from '../Images/editImage.png'
import { deletePost } from '../actions/postAction'
import Address from './Address'
import ZoneList from './ZoneList'
import PickupContext from '../context/PickupContext'
import DropContext from '../context/DropContext'

const DropZone = () => {
    const {pickupZone, setPickupZone} = useContext(PickupContext);
    const [address, setAddress]= useState(null);
    const selectAddress = (adr) => {
        console.log('selected address', adr);
        setAddress(adr);
    }
    const {dropZone, setDropZone} = useContext(DropContext);
    const selectZone = (zone) => {
        setDropZone(zone);
    }
    return (
        <div>
            <div className="card  d-flex flex-row" key={pickupZone.zoneId}>
                <div className="card-body">
                    <h5 className="card-title text-primary">{pickupZone.name}</h5>
                    <p className="card-text">{pickupZone.completeAddress}</p>                            
                </div>
                <div className="d-flex flex-column zonePosition">
                    <Link to="/zones">
                        <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Direction</button>
                    </Link>
                    <Link to="/zones">
                        <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Change</button>
                    </Link>
                </div>
            </div>
            <div>
                <Address selectAddress={selectAddress}/>
            </div>
            <div>
                { address ? (
                    <div>
                        <div className="infotext droptext">Plese select drop zone</div>
                        <ZoneList lat={address.lat} lng={address.lng} selectZone={selectZone} redirect='/estimateride'/>
                    </div>
                ) : (
                    <div>please select address</div>
                )}
            </div>
        </div>
        
    );
};

export default DropZone;