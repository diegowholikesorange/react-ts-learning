import * as React from 'react';
import { HelloQueryQuery } from '../../generated/graphql';

interface Props {
    response: HelloQueryQuery;
}

const HelloWorld: React.FC<Props> = ({ response }) => (
    <div>
        response.hello
    </div>
);

export default HelloWorld;
