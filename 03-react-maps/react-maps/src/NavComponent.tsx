import * as React from "react";
import {useContext} from "react";
import {Slider} from "@material-ui/core";
import AppContext from "./AppContext";


const NavComponent: React.FunctionComponent = () => {

    const sharedContext = useContext(AppContext); // <--- get shared context

    const handleSliderCommited = (event: object, value: any) => {
        sharedContext.scaleSetter(value); // <---- update the value in the shared context (triggers refresh)
    };

    return (
        <div>
            Navigation Settings
            <Slider min={8}
                    max={12}
                    defaultValue={sharedContext.scale} // <---- use scale in context when drawing slider
                    onChangeCommitted={handleSliderCommited}
            />
        </div>
    )
};

export default NavComponent;
