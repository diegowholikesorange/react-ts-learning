import * as React from "react";
import {useContext} from "react";
import GoogleMapReact from 'google-map-react';
import AppContext from "./AppContext";


const MapComponent: React.FunctionComponent = () => {

    const appContext = useContext(AppContext); // get default value from context
    const center = {lat: -37.7835457, lng: 144.9162673};

    return (
        <div style={{height: '90vh', width: '90vw'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBvr4nejV93VXy0bCT34cP6oz5tC1FtezA'}}
                defaultCenter={center}
                zoom={appContext == null ? 0 : appContext.scale}
            />
        </div>

    )
};


export default MapComponent;
