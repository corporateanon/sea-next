import { useQuery } from '@apollo/client';
import SearchRepositoriesQuery from './SearchRepositories.graphql';
import {
    SearchRepositories,
    SearchRepositories_search_edges,
    SearchRepositories_search_edges_node_Repository,
} from './__generated__/SearchRepositories';

const getReposList = (data: SearchRepositories) => {
    return (
        data.search.edges
            ?.filter((edge): edge is SearchRepositories_search_edges => !!edge)
            .map((edge) => edge.node)
            .filter(
                (
                    node
                ): node is SearchRepositories_search_edges_node_Repository =>
                    node.__typename === 'Repository'
            ) ?? []
    );
};

export const useReposSearch = (searchQuery: string) => {
    const result = useQuery<SearchRepositories>(SearchRepositoriesQuery, {
        variables: {
            searchQuery,
        },
    });

    const shouldLogin = (result.error?.networkError as any)?.statusCode === 401;

    return {
        ...result,
        repositories: result.data ? getReposList(result.data) : [],
        shouldLogin,
        error: shouldLogin ? null : result.error
    };
};
