import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Button } from '../components/Button';
import { LoginButton } from '../components/LoginButton';
import { LogoutButton } from '../components/LogoutButton';
import { RepositoriesList } from '../components/RepositoriesList';
import useDebounce from '../lib/useDebounce';
import { useReposSearch } from '../lib/useReposSearch';
import classes from './index.module.scss';

const Home: FC = () => {
    const [query, setQuery] = useState('react');
    const debouncedQuery = useDebounce(query, 500);
    const { loading, error, repositories, shouldLogin, data } = useReposSearch(
        debouncedQuery
    );
    const handleOnChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
        []
    );

    return (
        <div className={classes.container}>
            <p>{shouldLogin ? <LoginButton /> : <LogoutButton />}</p>

            {!shouldLogin && !loading && (
                <>
                    {error && JSON.stringify(error)}
                    <p>
                        <input
                            type="search"
                            name="query"
                            value={query}
                            onChange={handleOnChange}
                            placeholder="Search"
                        />
                    </p>
                    {data && (
                        <div className={classes.horizontalScroller}>
                            <RepositoriesList items={repositories} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Home;
