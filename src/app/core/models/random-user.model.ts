export interface RandomUserModel {
    name: Name;
    location: Location;
    picture: Picture;
}

export interface Location {
    coordinates: Coordinates;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
