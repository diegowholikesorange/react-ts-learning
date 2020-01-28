import * as React from "react";
import {useContext} from "react";
import {Slider, Button} from "@material-ui/core";
import MyAppContext from "./MyAppContext";


const NavComponent: React.FunctionComponent = () => {

    const myAppContext = useContext(MyAppContext); // <--- get shared state from context

    const handleSliderCommited = (event: object, value: any) => {
        myAppContext.scaleSetter(value); // <---- update the value in context (and refresh all children of App)
    };

    const handleButtonClicked = () => {
        myAppContext.scaleSetter(42);
    };

    return (
        <div>
            Navigation Settings
            <Slider min={8}
                    max={12}
                    defaultValue={myAppContext.scale} // <---- use scale in context when drawing slider
                    onChangeCommitted={handleSliderCommited}
            />
            <Button onClick={handleButtonClicked}>Reset</Button>
        </div>
    )
};

export default NavComponent;
