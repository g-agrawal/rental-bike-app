import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import deleteImage from '../Images/deleteImage.png'
import editImage from '../Images/editImage.png'
import { deletePost } from '../actions/postAction'
import Address from './Address'
import ZoneList from './ZoneList'
import PickupContext from '../context/PickupContext'

const PickupZone = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const lat = queryParameters.get("lat");
    const lng = queryParameters.get("lng");
    const {pickupZone, setPickupZone} = useContext(PickupContext);
    const selectZone = (zone) => {
        setPickupZone(zone);
    }
    return (
        <div>
            <div className="infotext">Plese select pickup zone</div>
            <ZoneList lat={lat} lng={lng} selectZone={selectZone} redirect='/dropzone'/>
        </div>
        
    );
};

export default PickupZone;