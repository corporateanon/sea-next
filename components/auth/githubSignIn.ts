import { stringify } from 'querystring';
const GITHUB_CLIENT_ID = '2e3ff1f88318842c5f7e'; //TODO: unhardcode!!!!

export const githubSignIn = () => {
    const params = stringify({
        client_id: GITHUB_CLIENT_ID,
    });
    document.location.href = `https://github.com/login/oauth/authorize?${params}`;
};
