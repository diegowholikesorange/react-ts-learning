import * as React from "react";
import {useState} from "react";
import GoogleMapReact from 'google-map-react';

interface Props {
}


const MapComponent: React.FunctionComponent<Props> = (props) => {

    const [center, setCenter] = useState({lat: -37.7835457, lng: 144.9162673});
    const [zoom, setZoom] = useState(9);

    return (
        <div style={{height: '90vh', width: '90vw'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAf58ngvegQsQ5xUZFbhr4VgYY8-LiI1nk'}}
                defaultCenter={center}
                defaultZoom={zoom}
            />
        </div>

    )
};


export default MapComponent;
