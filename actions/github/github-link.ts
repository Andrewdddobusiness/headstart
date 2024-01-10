import { Octokit } from "octokit";

export async function linkGithubRepo(repoName: string): Promise<string> {
  // const userSession = await getSession();
  // Create an Octokit instance with your access token
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  });

  // Fetch information about a private repository
  const repoInfo = await octokit.request("GET /repos/:owner/:repo", {
    owner: "Andrewdddobusiness",
    repo: "headstart-selections",
  });
  console.log(repoInfo.data);
  return "";
}
