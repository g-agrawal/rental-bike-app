import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import deleteImage from '../Images/deleteImage.png'
import editImage from '../Images/editImage.png'
import { deletePost } from '../actions/postAction'
import Address from './Address'
import ZoneList from './ZoneList'

class DropZone extends Component {
    handleDelete = (_id) => {
        this.props.onDeletePost(_id);
    } 
    render() {
        //const {zone} = this.props;
        // let zoneList = zone ? (
        //     zone.map(zone => {
        //         return (
        //             <div className="card  d-flex flex-row" key={zone.zoneId}>
        //                 <div className="card-body">
        //                     <h5 className="card-title text-primary">{zone.name}</h5>
        //                     <p className="card-text">{zone.completeAddress}</p>                            
        //                 </div>
        //                 <div className="d-flex flex-column">
        //                     <Link to="/zones">
        //                         <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Direction</button>
        //                     </Link>
        //                     <Link to="/zones">
        //                         <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Select</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         )
        //     })
        // ) : (
        // <div>
        //     Please wait while loading content...
        // </div>
        // );
        //const {zone} = this.props;
        return (
            <div>
                <div className="card  d-flex flex-row" key={101}>
                    <div className="card-body">
                        <h5 className="card-title text-primary">zone.name</h5>
                        <p className="card-text">zone.address</p>                            
                    </div>
                    <div className="d-flex flex-column">
                        <Link to="/zones">
                            <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Direction</button>
                        </Link>
                        <Link to="/zones">
                            <button className="nav-link btn btn-outline-success btn-sm my-2 my-sm-0">Change</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Address/>
                    <ZoneList/>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    //  console.log('ownProps');
    // if(ownProps.match.params.zoneId) {
    //     let zoneId = ownProps.match.params.zoneId;
    //     console.log(state.zones);
    //     return {
    //         zone: state.zones.find(post => post._id === zoneId)
    //     };
    // }
    return { };
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePost: _id => {
            dispatch(deletePost(_id));
        }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);