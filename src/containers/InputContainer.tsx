import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { IPlacesItem, ApiStatus } from '../models';
import { IState } from '../reducers';
import { loadPlaces, retrievePlace } from '../actions/placesActions';
import SearchInput from '../components/SearchInput';
import ListItem from '../components/ListItem';
import Loader from '../components/Loader';
import SearchStatus from '../components/SearchStatus';

interface IInputStateProps {
    input: string;
    loadingStatus: ApiStatus;
    places: IPlacesItem[];
}

interface IInputDispatchProps {
    loadPlaces: (input: string) => void;
    retrievePlace: (placeId: string) => void;
}

const Input = ({ input, places, loadingStatus, loadPlaces, retrievePlace }: IInputStateProps & IInputDispatchProps) => (
    <View style={{paddingTop: 40}}>
    <SearchInput input={input} onInputChange={loadPlaces} />
    {loadingStatus === ApiStatus.LOADING ? <Loader /> : null}
    {loadingStatus === ApiStatus.LOADED && places.length > 0 && !places.some(item => item.description === input) ? <ListItem places={places} onSelect={loadPlaces} saveToMarker={retrievePlace} /> : null}
    {loadingStatus === ApiStatus.LOADED && places.length === 0 && input.length > 0 ? <SearchStatus status="No places found" /> : null}
    {loadingStatus === ApiStatus.FAILED ? <SearchStatus status="Failed to search places" />  : null}
    </View>
);

function mapStateToProps(state: IState): IInputStateProps {
    return {
        input: state.places.input,
        places: state.places.places,
        loadingStatus: state.places.loadingStatus
    }
}

const mapDispatchToProps: IInputDispatchProps = {
    loadPlaces,
    retrievePlace
}

export const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);