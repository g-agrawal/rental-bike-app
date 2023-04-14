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

    const {pickupZone, setPickupZone} = useContext(PickupContext);
    const selectZone = (zone) => {
        setPickupZone(zone);
    }
    return (
        <div>
            <ZoneList lat={1.2} lng={4.6} selectZone={selectZone} redirect='/dropzone'/>
        </div>
        
    );
};

export default PickupZone;