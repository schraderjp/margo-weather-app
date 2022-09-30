import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await axios.get(
    `https://rt.ambientweather.net/v1/devices/${process.env.MAC_ADDRESS}?apiKey=${process.env.API_KEY}&applicationKey=${process.env.APP_KEY}&endDate=&limit=1`
  );
  const parsed = await data.data;
  res.status(200).json(parsed);
}
