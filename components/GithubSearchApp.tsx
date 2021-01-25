import { FC } from 'react';

import { gql, useQuery } from '@apollo/client';
import { useGithubSession } from './auth/useGithubSession';
import { Button } from '@material-ui/core';
import { githubSignIn } from './auth/githubSignIn';

// const RepositoriesList: FC = () => {
//     const { loading, error, data } = useQuery(gql`
//         {
//             search(query: "re", type: REPOSITORY, first: 10) {
//                 edges {
//                     node {
//                         ... on Repository {
//                             id
//                             name
//                         }
//                     }
//                 }
//             }
//         }
//     `);
//     debugger;
//     return <div>suka</div>;
// };

export const GithubSearchApp: FC = () => {
    const session = useGithubSession();
    if (!session.loggedIn) {
        return (
            <Button color="primary" variant="contained" onClick={githubSignIn}>
                Log In
            </Button>
        );
    }

    return <div>{JSON.stringify(session)}</div>;
};
