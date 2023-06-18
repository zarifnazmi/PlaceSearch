export interface IPlacesItem {
    description: string;
    place_id?: string;
}

export interface IPlaceProps {
    formatted_address: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        }
    }
}

export enum ApiStatus {
    LOADING = 'loading',
    LOADED = 'loaded',
    FAILED = 'failed'
}