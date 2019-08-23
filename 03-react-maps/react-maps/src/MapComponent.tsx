import * as React from "react";
import {useState} from "react";
import GoogleMapReact from 'google-map-react';

interface Props {
}


const MapComponent: React.FunctionComponent<Props> = (props) => {

    const [center, setCenter] = useState({lat: -37.7835457, lng: 144.9162673});
    const [scale, setScale] = useState(9);

    return (
        <div style={{height: '90vh', width: '90vw'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBvr4nejV93VXy0bCT34cP6oz5tC1FtezA'}}
                defaultCenter={center}
                zoom={scale}
            />
        </div>

    )
};


export default MapComponent;
