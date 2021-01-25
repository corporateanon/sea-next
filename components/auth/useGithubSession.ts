import { gql, useQuery } from '@apollo/client';

interface GithubSession {
    loading: boolean;
    loggedIn: boolean;
    username?: string;
}

/*

{
  viewer {
    id
    email
    name
  }
}

*/

export const useGithubSession = (): GithubSession => {
    const { loading, error, data } = useQuery(gql`
        {
            viewer {
                id
                email
                name
            }
        }
    `);
    console.log({ loading, error, data });
    if (loading) {
        return {
            loading: true,
            loggedIn: false,
        };
    }
    if (error) {
        return {
            loading: false,
            loggedIn: false,
        };
    }
    return {
        loggedIn: true,
        loading: false,
        username: 'asd',
    };
};
