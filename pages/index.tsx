import { gql, useQuery } from '@apollo/client';
import { FC } from 'react';

const getRepos = gql`
    query getRepos($searchQuery: String!) {
        search(query: $searchQuery, type: REPOSITORY, first: 10) {
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        stargazerCount
                        forkCount
                        nameWithOwner
                    }
                }
            }
        }
    }
`;

const Home: FC = () => {
    const { data, loading, error } = useQuery(getRepos, {
        variables: {
            searchQuery: 're',
        },
    });
    if ((error?.networkError as any)?.statusCode === 401) {
        return <a href="/api/auth/gh">Log in</a>;
    }
    return (
        <>
            {error && JSON.stringify(error)}
            <ul>
                {data?.search?.edges &&
                    data?.search?.edges.map(({ node }, i) => (
                        <li key={i}>
                            {node.nameWithOwner} 🌟 {node.stargazerCount} 🍴{' '}
                            {node.forkCount}
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default Home;
