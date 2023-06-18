import { combineEpics, createEpicMiddleware } from 'redux-observable';
import placesEpics from './placesEpics';
import { IState } from '../reducers';
import { Action } from 'redux';

export const rootEpic = combineEpics(placesEpics);

export default createEpicMiddleware<Action, Action, IState>();