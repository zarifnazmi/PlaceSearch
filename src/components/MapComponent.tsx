import React, { useEffect, useRef } from 'react';
import { StyleSheet, Keyboard } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Animated as AnimatedMap, Region } from 'react-native-maps';


interface MarkerProps {
    lat: number;
    lng: number;
    title: string;
    region: Region;
}

function MapComponent(prop: MarkerProps): JSX.Element {

    const _map = useRef<MapView>(null);

    useEffect(() => {
        _map.current?.animateToRegion(
            {
                latitude: prop.lat,
                longitude: prop.lng,
                latitudeDelta: prop.region.latitudeDelta,
                longitudeDelta: prop.region.longitudeDelta
            },
            350
        );
    }, [prop.lat, prop.lng]);

    return (
        <AnimatedMap
            ref={_map}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            mapType="hybrid"
            style={styles.map}
            initialRegion={prop.region}
            onPress={() => Keyboard.dismiss()}
            loadingEnabled
            loadingIndicatorColor="#473134"
            loadingBackgroundColor="#FFCC00"
            showsUserLocation={true}
        >
            {prop.title.length > 0 ? <Marker coordinate={{ latitude: prop.lat, longitude: prop.lng }} description={prop.title} /> : null}
        </AnimatedMap>
    );
};

export default React.memo(MapComponent);

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});