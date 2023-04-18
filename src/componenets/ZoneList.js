import React, {Component, useContext, useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import deleteImage from '../Images/deleteImage.png'
import editImage from '../Images/editImage.png'
import { getNearZones, selectPickupZone } from '../actions/postAction'
import PickupContext from '../context/PickupContext'
import axios from 'axios'
import configData from '../config/config.json'

const ZoneList = (props) =>  {
    console.log('props are - ', props);
    const [zones, setZones] = useState([]);
    
    useEffect(() => {
        const url = configData.ZONE_SERVER_URL + props.lat + '&lng=' + props.lng;
        const fetchData = async () => {
          try {
            const { data: response } = await axios.get(url);
            console.log('got response', response);
            setZones(response);
          } catch (error) {
            console.error(error)
          }
        };
        fetchData();
    }, []);
    let zoneList = zones ? (
        zones.map(zone => {
            return (
                <div className="card  d-flex flex-row" key={zone.zoneId}>
                    <div className="card-body">
                        <h5 className="card-title text-primary">{zone.name}</h5>
                        <p className="card-text">{zone.completeAddress}</p>                            
                    </div>
                    <div className="d-flex flex-column zonePosition">
                        <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0 ">Direction</button>
                        <Link to={props.redirect}>
                            <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0 " onClick={() => {
                                props.selectZone({
                                    zoneId: zone.zoneId,
                                    name: zone.name,
                                    completeAddress: zone.completeAddress
                                    });
                            }}>Select Zone</button>
                        </Link>
                    </div>
                </div>
            )
        })
    ) : (
    <div>
        Please wait while loading content...
    </div>
    );
    return (
        <div className="mainContent home container">
            {zoneList}
        </div>
    );
};

export default ZoneList;