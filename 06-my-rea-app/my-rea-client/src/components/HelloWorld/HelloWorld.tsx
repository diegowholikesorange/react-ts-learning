import * as React from 'react';
import {HelloQuery} from '../../generated/graphql';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import HouseIcon from '@material-ui/icons/House';


interface Props {
    data: HelloQuery;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);


const HelloWorld: React.FC<Props> = ({data}) => {

    const styleClasses = useStyles();

    return (
        <div>
            {data.pageContent!.welcome}
            <List className={styleClasses.root}>
                {data.pageContent!.properties!.map((ithProperty) =>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <HouseIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={ithProperty!.address}/>
                    </ListItem>
                )}
            </List>
        </div>
    )
};

export default HelloWorld;
