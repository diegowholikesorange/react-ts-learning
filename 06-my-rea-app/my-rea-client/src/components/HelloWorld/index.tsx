import * as React from 'react';
import {useHelloQueryQuery} from "../../generated/graphql";
import HelloWorld from "./HelloWorld";

const HelloWorldContainer = () => {

    const { data, error, loading } = useHelloQueryQuery();

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error || !data) {
        return <div>ERROR</div>;
    }
    return <HelloWorld response={data} />;
};

export default HelloWorldContainer;
