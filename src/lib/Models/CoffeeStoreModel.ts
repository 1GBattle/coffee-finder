export default interface CoffeeStoreModel {
	name: string
	location: {
		address: string
		formatted_address: string
		postcode: string
		locality: string
		region: string
	}
	fsq_id: string
	distance: number
	closed_bucket: boolean
	imageUrl: string
	geocodes: {
		main: {
			latitude: number
			longitude: number
		}
	}
	photos: [{ prefix: string; suffix: string }]
	rating: number
}
