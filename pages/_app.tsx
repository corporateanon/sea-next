import App, { AppContext } from 'next/app';
import nookies from 'nookies';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '../styles/globals.css';

function MyApp({ Component, pageProps, ghAccessToken }) {
    const apollo = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'https://api.github.com/graphql',
        headers: {
            Authorization: `bearer ${ghAccessToken}`,
        },
    });
    return (
        <ApolloProvider client={apollo}>
            <Component {...pageProps} apolloClient={apollo} />
        </ApolloProvider>
    );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);
    const cookies = nookies.get(appContext.ctx);
    const { ghAccessToken } = cookies;

    return { ...appProps, ghAccessToken };
};

export default MyApp;
