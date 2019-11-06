import * as React from 'react';
import { HelloQuery } from '../../generated/graphql';

interface Props {
    data: HelloQuery;
}

const HelloWorld: React.FC<Props> = ({ data }) => (
    <div>
        {data.hello}
    </div>
);

export default HelloWorld;
