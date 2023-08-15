import { NextApiRequest, NextApiResponse } from 'next'

export default async function findCoffeeShops(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method !== 'Get') {
			res.status(405).json({ message: 'Method not allowed' })
		}

		const { city } = req.query
		const { lat, long } = req.query

		if (city && lat && long) {
			res
				.status(400)
				.json({ message: 'You can only search by city or by coordinates' })
		}

		const apiRes = await fetch('https://api.foursquare.com/v3/places/search', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_PLACES_TOKEN}`
			}
		})

		res.status(200).json(apiRes)
	} catch (err: any) {
		res.status(500).json({ statusCode: 500, message: err.message })
	}
}
