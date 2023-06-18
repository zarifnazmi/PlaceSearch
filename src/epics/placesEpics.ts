import { combineEpics, Epic } from "redux-observable";
import { switchMap, map, startWith, catchError, filter } from "rxjs/operators";
import {
  PlacesAction,
  PlacesActionTypes,
  loadedPlaces,
  loadingPlaces,
  loadingPlacesFailed,
  retrievedPlace,
  retrievingPlace,
  retrievingPlaceFailed
} from "../actions/placesActions";
import { IState } from "../reducers";
import { from, of } from "rxjs";
import { isOfType } from "typesafe-actions";
import Config from "react-native-config";

const loadPlacesEpic: Epic<PlacesAction, PlacesAction, IState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isOfType(PlacesActionTypes.LOAD_PLACES)),
    switchMap(action =>
      from(fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${action.payload.input}&key=${Config.GMAP_KEY}`
      ).then(response => response.json())).pipe(
        map(response => loadedPlaces(response.predictions)),
        startWith(loadingPlaces()),
        catchError(() => of(loadingPlacesFailed()))
      )
    )
  );

const retrievePlaceEpic: Epic<PlacesAction, PlacesAction, IState> = (
  action$,
  state$
) => action$.pipe(
  filter(isOfType(PlacesActionTypes.RETRIEVE_PLACE)),
  switchMap(action =>
    from(fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?place_id=${action.payload.placeId}&key=${Config.GMAP_KEY}`
      ).then(response => response.json())).pipe(
      map(response => retrievedPlace(response.results[0])),
      startWith(retrievingPlace()),
      catchError(() => of(retrievingPlaceFailed()))
    )  
  )
)

export default combineEpics(loadPlacesEpic, retrievePlaceEpic);