import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { IPlaceProps, ApiStatus } from '../models';
import { IState } from '../reducers';
import MapComponent from '../components/MapComponent';
import ToastLoader from '../components/ToastLoader';
import ToastFailed from '../components/ToastFailed';

interface IViewStateProps {
    addingStatus: ApiStatus;
    place: IPlaceProps;
}

const ViewMap = ({ place, addingStatus }: IViewStateProps) => (
    <>
    <MapComponent lat={place.geometry?.location.lat === 0 ? 3.0290544 : place.geometry?.location.lat} lng={place.geometry?.location.lng  === 0 ? 101.7666743 : place.geometry?.location.lng} title={place.formatted_address} region={{
        latitude: 3.0290544,
        longitude: 101.7666743,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0075
    }} />
    {addingStatus === ApiStatus.LOADING ? <ToastLoader /> : null}
    {addingStatus === ApiStatus.FAILED ? <ToastFailed content="Failed to show place" /> : null}
    </>
);

function mapStateToProps(state: IState): IViewStateProps {
    return {
        place: state.places.place,
        addingStatus: state.places.addingStatus
    }
}

export const ViewContainer = connect(mapStateToProps)(ViewMap);