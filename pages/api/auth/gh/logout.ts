import { NextApiRequest, NextApiResponse } from 'next';
import nookies from 'nookies';

const endpoint = async (req: NextApiRequest, res: NextApiResponse) => {
    nookies.destroy({ res }, 'ghAccessToken', { path: '/' });
    res.redirect('/');
};

export default endpoint;
