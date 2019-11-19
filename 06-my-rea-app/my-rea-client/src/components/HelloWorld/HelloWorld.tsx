import * as React from 'react';
import {HelloQuery} from '../../generated/graphql';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

interface Props {
    data: HelloQuery;
}

const HelloWorld: React.FC<Props> = ({data}) => (
    <div>
        {data.pageContent!.welcome}
        <List component="nav">
            {data.pageContent!.properties!.map((ithProperty) =>
                <ListItem>
                    {ithProperty!.address}
                </ListItem>
            )}
        </List>

    </div>
);

export default HelloWorld;
