import * as React from 'react';
import { HelloQuery, HelloQueryResult } from '../../generated/graphql';

interface Props {
    data: HelloQuery;
}

const HelloWorld: React.FC<Props> = ({ data }) => (
    <div>
        {data.pageContent!.welcome}
    </div>
);

export default HelloWorld;
