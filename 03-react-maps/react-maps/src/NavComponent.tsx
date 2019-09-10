import * as React from "react";
import {useContext} from "react";
import {Slider} from "@material-ui/core";
import MyAppContext from "./MyAppContext";


const NavComponent: React.FunctionComponent = () => {

    const myAppContext = useContext(MyAppContext); // <--- get shared state from context

    const handleSliderCommited = (event: object, value: any) => {
        myAppContext.scaleSetter(value); // <---- update the value in context (and refresh all children of App)
    };

    return (
        <div>
            Navigation Settings
            <Slider min={8}
                    max={12}
                    defaultValue={myAppContext.scale} // <---- use scale in context when drawing slider
                    onChangeCommitted={handleSliderCommited}
            />
        </div>
    )
};

export default NavComponent;
