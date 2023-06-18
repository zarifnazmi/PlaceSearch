import { IPlacesItem, IPlaceProps } from "../models";

export enum PlacesActionTypes {
    LOAD_PLACES = 'places/load',
    LOADING_PLACES = 'places/loading',
    LOADED_PLACES = 'places/loaded',
    LOADING_PLACES_FAILED = 'places/loading_failed',

    RETRIEVE_PLACE = 'places/retrieve',
    RETRIEVING_PLACE = 'places/retrieving',
    RETRIEVED_PLACES = 'places/retrieved',
    RETRIEVING_PLACES_FAILED = 'places/retrieving_failed'
}

export interface ILoadPlacesAction {
    type: PlacesActionTypes.LOAD_PLACES,
    payload: {
        input: string;
      };
}

export interface ILoadingPlacesAction {
    type: PlacesActionTypes.LOADING_PLACES
}

export interface ILoadedPlacesAction {
    type: PlacesActionTypes.LOADED_PLACES,
    payload: {
        places: IPlacesItem[];
    }
}

export interface ILoadingPlacesFailedAction {
    type: PlacesActionTypes.LOADING_PLACES_FAILED
}

export interface IRetrievePlaceAction {
    type: PlacesActionTypes.RETRIEVE_PLACE,
    payload: {
        placeId: string;
    }
}

export interface IRetrievingPlaceAction {
    type: PlacesActionTypes.RETRIEVING_PLACE
}

export interface IRetrievedPlaceAction {
    type: PlacesActionTypes.RETRIEVED_PLACES,
    payload: {
        place: IPlaceProps;
    }
}

export interface IRetrievingPlaceFailedAction {
    type: PlacesActionTypes.RETRIEVING_PLACES_FAILED
}

export function loadPlaces(input: string): ILoadPlacesAction {
    return {
        type: PlacesActionTypes.LOAD_PLACES,
        payload: { input },
    }
}

export function loadingPlaces(): ILoadingPlacesAction {
    return {
        type: PlacesActionTypes.LOADING_PLACES
    }
}

export function loadedPlaces(places: IPlacesItem[]): ILoadedPlacesAction {
    return {
        type: PlacesActionTypes.LOADED_PLACES,
        payload: {
            places
        }
    }
}

export function loadingPlacesFailed(): ILoadingPlacesFailedAction {
    return {
        type: PlacesActionTypes.LOADING_PLACES_FAILED
    }
}

export function retrievePlace(placeId: string): IRetrievePlaceAction {
    return {
        type: PlacesActionTypes.RETRIEVE_PLACE,
        payload: {
            placeId
        }
    }
}

export function retrievingPlace(): IRetrievingPlaceAction {
    return {
        type: PlacesActionTypes.RETRIEVING_PLACE
    }
}

export function retrievedPlace(place: IPlaceProps): IRetrievedPlaceAction {
    return {
        type: PlacesActionTypes.RETRIEVED_PLACES,
        payload: {
            place
        }
    }
}

export function retrievingPlaceFailed(): IRetrievingPlaceFailedAction {
    return {
        type: PlacesActionTypes.RETRIEVING_PLACES_FAILED
    }
}

export type PlacesAction = ILoadPlacesAction | ILoadingPlacesAction | ILoadedPlacesAction | ILoadingPlacesFailedAction | IRetrievePlaceAction | IRetrievingPlaceAction | IRetrievedPlaceAction | IRetrievingPlaceFailedAction;