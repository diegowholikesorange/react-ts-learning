import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
    query LaunchList {
        launches {
            mission_id
            mission_name
            launch_year
            mission_id
        }
    }
`;
