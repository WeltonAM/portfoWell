import normalizarUrl from "./utils/normalizarUrl"

const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
	const response = await fetch(normalizarUrl(`${baseURL}/${url}`))
	return response.json()
}
