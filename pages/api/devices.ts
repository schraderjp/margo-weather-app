import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await axios.get(
    `https://rt.ambientweather.net/v1/devices?applicationKey=${process.env.APP_KEY}&apiKey=${process.env.API_KEY}`
  );
  const parsed = await data.data;
  res.status(200).json(parsed);
}
