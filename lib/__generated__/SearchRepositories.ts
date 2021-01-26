/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchRepositories
// ====================================================

export interface SearchRepositories_search_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface SearchRepositories_search_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface SearchRepositories_search_edges_node_Repository {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * Returns a count of how many stargazers there are on this object
   */
  stargazerCount: number;
  /**
   * Returns how many forks there are of this repository in the whole network.
   */
  forkCount: number;
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
}

export type SearchRepositories_search_edges_node = SearchRepositories_search_edges_node_App | SearchRepositories_search_edges_node_Repository;

export interface SearchRepositories_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: SearchRepositories_search_edges_node | null;
}

export interface SearchRepositories_search {
  __typename: "SearchResultItemConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: SearchRepositories_search_pageInfo;
  /**
   * A list of edges.
   */
  edges: (SearchRepositories_search_edges | null)[] | null;
}

export interface SearchRepositories {
  /**
   * Perform a search across resources.
   */
  search: SearchRepositories_search;
}

export interface SearchRepositoriesVariables {
  searchQuery: string;
  cursor?: string | null;
}
