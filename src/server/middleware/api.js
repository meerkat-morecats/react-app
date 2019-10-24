import config from '../config';
import axios from '../../lib/axios';

export default async function api(req, res, next) {
    const url = config.host + req.originalUrl;
    const result = await axios({
        method: req.method,
        url,
        data: req.body,
    });

    return res.json(result.data);
}
