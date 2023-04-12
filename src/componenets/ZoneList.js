import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import deleteImage from '../Images/deleteImage.png'
import editImage from '../Images/editImage.png'
import { deletePost } from '../actions/postAction'

class ZoneList extends Component {
    handleDelete = (_id) => {
        this.props.onDeletePost(_id);
    } 
    render() {
        const {zones} = this.props;
        let zoneList = zones ? (
            zones.map(zone => {
                return (
                    <div className="card  d-flex flex-row" key={zone.zoneId}>
                        <div className="card-body">
                            <h5 className="card-title text-primary">{zone.name}</h5>
                            <p className="card-text">{zone.completeAddress}</p>                            
                        </div>
                        <div className="d-flex flex-column">
                            <Link to="/zones">
                                <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Direction</button>
                            </Link>
                            <Link to={'/DropZone/' + zone.zoneId}>
                                <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Select</button>
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
    }
}

const mapStateToProps = state => {
    return {
        zones: state.zones
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePost: _id => {
            dispatch(deletePost(_id));
        }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ZoneList);