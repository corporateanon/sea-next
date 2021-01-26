import axios from 'axios';
import nookies from 'nookies';
import { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'querystring';

const clientID = process.env.GH_CLIENT_ID;
const clientSecret = process.env.GH_CLIENT_SECRET;

const endpoint = async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { code },
    } = req;
    const { data: result } = await axios.post(
        'https://github.com/login/oauth/access_token',
        {
            client_id: clientID,
            client_secret: clientSecret,
            code,
        }
    );
    const { access_token: accessToken } = parse(result) as {
        access_token?: string;
    };
    if (accessToken) {
        nookies.set({ res }, 'ghAccessToken', accessToken, {
            maxAge: 365 * 24 * 60 * 60,
            httpOnly: false,
            path: '/',
        });
        res.redirect('/');
    } else {
        res.status(500);
    }
};

export default endpoint;
