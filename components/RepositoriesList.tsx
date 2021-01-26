import { FC } from 'react';
import { Repository } from '../interfaces/Repository';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import classes from './RepositoriesList.module.scss';

interface RepositoriesListProps {
    items: Repository[];
}

export const RepositoriesList: FC<RepositoriesListProps> = ({ items }) => {
    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th>Repo</th>
                    <th>Stars</th>
                    <th>Forks</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <a
                                href={`https://github.com/${item.nameWithOwner}`}
                                target="_blank"
                            >
                                {item.nameWithOwner}
                            </a>
                        </td>
                        <td>
                            <FaStar /> {item.stargazerCount}
                        </td>
                        <td>
                            <FaCodeBranch /> {item.forkCount}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
