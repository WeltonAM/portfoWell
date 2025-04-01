export default function normalizarUrl(url: string) {
	const protocolo = url.split("://")[0]
	const restante = url.split("://")[1]
	return `${protocolo}://${restante.replaceAll(/\/{2,}/g, "/")}`
}
