import * as React from "react";
import {useContext} from "react";
import {Slider} from "@material-ui/core";
import AppContext from "./AppContext";


const NavComponent: React.FunctionComponent = () => {

    const appContext = useContext(AppContext); // <--- get shared context

    const handleSliderCommited = (event: object, value: any) => {
        appContext.scaleSetter(value); // <---- update the value in the shared context via the setter (triggers refresh)
    };

    return (
        <div>
            Navigation Settings
            <Slider min={8}
                    max={12}
                    defaultValue={appContext.scale}
                    onChangeCommitted={handleSliderCommited}
            />
        </div>
    )
};

export default NavComponent;
