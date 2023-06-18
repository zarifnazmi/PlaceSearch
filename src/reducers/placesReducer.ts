import { produce } from 'immer';
import { ApiStatus, IPlacesItem, IPlaceProps } from "../models";

import { PlacesAction, PlacesActionTypes } from '../actions/placesActions';

export interface IPlaceState {
    input: string;
    loadingStatus: ApiStatus;
    addingStatus: ApiStatus;
    places: IPlacesItem[];
    place: IPlaceProps;
  }

export const initialPlaceState: IPlaceState = {
  loadingStatus: ApiStatus.LOADED,
  addingStatus: ApiStatus.LOADED,
  places: [],
  input: '',
  place: {
    formatted_address: '',
    geometry: {
        location: {
            lat: 0,
            lng: 0
        }
    }
  }
}

export default function placesReducer(state: IPlaceState = initialPlaceState, action: PlacesAction) {
  return produce(state, draft => {
    switch (action.type) {
      case PlacesActionTypes.LOAD_PLACES:
        return { ...state, input: action.payload.input };
      case PlacesActionTypes.LOADING_PLACES:
        draft.loadingStatus = ApiStatus.LOADING;
        break;

      case PlacesActionTypes.LOADING_PLACES_FAILED:
        draft.loadingStatus = ApiStatus.FAILED;
        break;

      case PlacesActionTypes.LOADED_PLACES:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.places = action.payload.places;
        break;

      case PlacesActionTypes.RETRIEVE_PLACE:
      case PlacesActionTypes.RETRIEVING_PLACE:
        draft.addingStatus = ApiStatus.LOADING;
        break;

      case PlacesActionTypes.RETRIEVING_PLACES_FAILED:
        draft.addingStatus = ApiStatus.FAILED;
        break;

      case PlacesActionTypes.RETRIEVED_PLACES:
        draft.addingStatus = ApiStatus.LOADED;
        draft.place = action.payload.place;
        break;
    }
  });
}