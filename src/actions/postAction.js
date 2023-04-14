import { DELETE_POST, FETCH_POST, ADD_POST, SEARCH_POST } from "./actionTypes"
import axios from 'axios'

export const fetchAllPostSuccess = (zones) => {
    return {
        type: FETCH_POST,
        payload: {
            zones
        }
    }
} 

export const selectPickupZoneSuccess = (zone) => {
    return {
        type: FETCH_POST,
        payload: {
            zone
        }
    }
} 

export const getNearZones = (lat, lng) => {
    return (dispatch) => {
        console.log('curr - ' + lat);
        const url = 'http://localhost:8080/zones/nearBy?lat=' + lat + '&lng=' + lng;
        console.log('url', url);
        return axios.get(url)
            .then(res => {
                console.log(res);
                dispatch(fetchAllPostSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const selectPickupZone = (zone) => {
    return (dispatch) => {
        console.log('curr - ');
        console.log(zone);
        return dispatch(selectPickupZoneSuccess(zone));
    };
} 

export const deletePostSuccess = (_id) => {
    return {
        type: DELETE_POST,
        payload: {
            _id: _id
        }        
    }
}

export const deletePost = (_id) => {
    return (dispatch) => {
        return axios.delete('/deletePost/' + _id)
            .then(res => {
                dispatch(deletePostSuccess(_id));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const searchPostSuccess = (searchText) => {
    return {
        type: SEARCH_POST,
        payload: {
            searchText
        }
    }
} 

