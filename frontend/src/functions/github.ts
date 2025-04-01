export async function obterReadme(repoUrl: string) {
	const respositorio = repoUrl.split("github.com/")[1]
	const readmeUrl = `https://raw.githubusercontent.com/${respositorio}/main/README.md`
	const response = await fetch(readmeUrl)

	return response.text()
}
