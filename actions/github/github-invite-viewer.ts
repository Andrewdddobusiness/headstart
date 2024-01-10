import { Octokit } from "octokit";

const owner = "andrewdddobusiness";
const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN;
const repo = "headstart-selections";
const viewerUsername = "andrew-do";

const octokit = new Octokit({
  auth: token,
});

export async function inviteViewerToRepo() {
  try {
    // Add viewer as a read-only collaborator to the repository using .request method
    await octokit.request(
      "PUT /repos/andrewdddobusiness/headstart-selections/collaborators/andrew-do",
      {
        owner: owner,
        repo: repo,
        username: viewerUsername,
        permission: "read", // Read-only permission
      }
    );

    console.log(`Viewer ${viewerUsername} added as a read-only collaborator.`);
  } catch (error: any) {
    console.error("Error:", error.message);
  }
}
