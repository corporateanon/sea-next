import { Repository } from '../interfaces/Repository';
import { RepositoriesList } from './RepositoriesList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders a list of repositories', async () => {
    const repos: Repository[] = [
        {
            __typename: 'Repository',
            forkCount: 10,
            id: 'asd',
            name: 'Hello',
            nameWithOwner: 'me/Hello',
            stargazerCount: 100,
        },
    ];

    render(<RepositoriesList items={repos} />);

    const ths = screen.getAllByRole('columnheader');
    expect(ths.length).toBe(3);

    const [head, row] = screen.getAllByRole('row');

    expect(head.childNodes[0]).toHaveTextContent('Repo');
    expect(head.childNodes[1]).toHaveTextContent('Stars');
    expect(head.childNodes[2]).toHaveTextContent('Forks');

    expect(row.childNodes[0]).toHaveTextContent('me/Hello');
    expect(row.childNodes[1]).toHaveTextContent('100');
    expect(row.childNodes[2]).toHaveTextContent('10');
});
