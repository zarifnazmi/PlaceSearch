import { combineReducers } from 'redux';
import placesReducer, { IPlaceState, initialPlaceState } from './placesReducer';

export interface IState {
  places: IPlaceState;
}

export const initialState: IState = {
  places: initialPlaceState
};

export default combineReducers({
  places: placesReducer
});