import * as React from "react";
import {useState} from "react";
import {Slider} from "@material-ui/core";

interface NavProps {
    initialScale: number;
}

const NavComponent: React.FunctionComponent<NavProps> = (props) => {

    const [scale, setScale] = useState(props.initialScale);

    const handleSliderMoved = (event: object, value: any) => {
        setScale(value);
        console.log("moved to scale " + {value});
    };

    const handleSliderCommited = (event: object, value: any) => {
        setScale(value);
        console.log("new scale " + {value});
    };

    return (

        <div>
            navigation settings
            <Slider min={8} max={12} defaultValue={scale}
                    onChange={handleSliderMoved}
                    onChangeCommitted={handleSliderCommited}
            />
            <label>{scale}</label>
        </div>
    )
};


export default NavComponent;
