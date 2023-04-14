import { FETCH_POST, SELECT_PICKUP_ZONE, SELECT_DROP_ZONE } from "../actions/actionTypes";


export default function postReducer (state =[], action) {
    switch(action.type) {
        case FETCH_POST:
            return {
                zones: action.payload.zones,
                searchText: state.searchText
            };
        case SELECT_PICKUP_ZONE:
            return {
                ...state,
                pickupZone: action.payload.zone
            };
        case SELECT_DROP_ZONE:
            return {
                pickupZone: action.payload.zone
            };
        default:
            return {
                zones: state.zones,
                searchText: state.searchText
            };
    }
}