import * as React from "react";
import {useContext} from "react";
import GoogleMapReact from 'google-map-react';
import AppContext from "./AppContext";


const MapComponent: React.FunctionComponent = () => {

    const sharedState = useContext(AppContext); // <--- get shared state from context

    return (
        <div style={{height: '70vh', width: '70vw'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBvr4nejV93VXy0bCT34cP6oz5tC1FtezA'}}
                defaultCenter={{lat: -37.7835457, lng: 144.9162673}}
                zoom={sharedState.scale} // <----- use scale in context when drawing map
            />
        </div>

    )
};

export default MapComponent;
