import * as React from "react";
import {useContext, useState} from "react";
import {Slider} from "@material-ui/core";
import AppContext from "./AppContext";


const NavComponent: React.FunctionComponent = () => {

    const appContext = useContext(AppContext); // get default value from context
    const [sliderValue, setSliderValue] = useState(appContext == null ? 0 : appContext.scale); // this state is local to the component

    const handleSliderMoved = (event: object, value: any) => {
        setSliderValue(value);
        console.log("internal slider value=" + {value});
    };

    const handleSliderCommited = (event: object, value: any) => {
        setSliderValue(value);
        console.log("publishing slider value=" + {value});
        if (appContext != null) {
            appContext.setter(value);
        }
    };

    return (
        <div>
            Navigation Settings
            <Slider min={8} max={12} defaultValue={sliderValue}
                    onChange={handleSliderMoved}
                    onChangeCommitted={handleSliderCommited}
            />
            <label>{sliderValue}</label>
            <p/>
            <label>{appContext == null ? 0 : appContext.scale}</label>
        </div>
    )
};


export default NavComponent;
