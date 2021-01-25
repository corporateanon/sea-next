import { stringify, parse, ParsedUrlQuery } from 'querystring';
import { gql, useQuery } from '@apollo/client';
import { createContext, FC, useCallback, useEffect } from 'react';
import axios from 'axios';

interface IGithubAuthContext extends GithubSession {
    signIn: () => void;
}

const signIn = (clientID: string) => {
    const params = stringify({
        client_id: clientID,
    });
    document.location.href = `https://github.com/login/oauth/authorize?${params}`;
};

interface GithubSession {
    loading: boolean;
    loggedIn: boolean;
    username?: string;
}

const useGithubSessionInternal = (): GithubSession => {
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

const useLocationEffect = (
    effector: (pathname: string, query: ParsedUrlQuery) => void
) => {
    const {
        location: { pathname, search },
    } = document;
    const fn = useCallback(() => {
        const query = parse((search ?? '').replace(/^\?/, ''));
        effector(pathname, query);
    }, [effector, pathname, search]);
    useEffect(fn, [fn]);
};

const GithubAuthContext = createContext<IGithubAuthContext>({
    loading: true,
    loggedIn: false,
    signIn: () => {},
});

interface GithubAuthProviderProps {
    clientID: string;
    clientSecret: string;
}
export const GithubAuthProvider: FC<GithubAuthProviderProps> = ({
    children,
    clientID,
    clientSecret,
}) => {
    const onUrlChanged = useCallback(
        async (pathname: string, query: ParsedUrlQuery) => {
            if (pathname.includes('auth/gh/callback') && query.code) {
                await axios.post(
                    'https://github.com/login/oauth/access_token',
                    {
                        client_id: clientID,
                        client_secret: clientSecret,
                        code: query.code,
                    }
                );
            }
        },
        []
    );

    useLocationEffect(onUrlChanged);
    const session = useGithubSessionInternal();
    const sessionWithSignIn = {
        ...session,
        signIn: signIn.bind(null, clientID),
    };

    return (
        <GithubAuthContext.Provider value={sessionWithSignIn}>
            {children}
        </GithubAuthContext.Provider>
    );
};
