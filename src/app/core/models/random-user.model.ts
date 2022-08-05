export interface RandomUserModel {
    results: Result[];
}



export interface Result {
    name: Name;
    location: Location;
    picture: Picture;
}


export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}


export interface Name {
    title: string;
    first: string;
    last: string;
}


export interface Location {
    coordinates: Coordinates;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}
