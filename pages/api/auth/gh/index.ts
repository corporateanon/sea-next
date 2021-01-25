import { NextApiRequest, NextApiResponse } from 'next';
import { stringify } from 'querystring';

const clientID = process.env.GH_CLIENT_ID;

const endpoint = async (req: NextApiRequest, res: NextApiResponse) => {
    const params = stringify({
        client_id: clientID,
        scope: 'read:user'
    });

    res.redirect(`https://github.com/login/oauth/authorize?${params}`);
};

export default endpoint;
