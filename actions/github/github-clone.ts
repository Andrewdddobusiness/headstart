// app/actions/github.ts
"use client";
import { Octokit } from "octokit";
import { getSession } from "../supabase/get-session";

export async function createGitHubRepo(repoName: string): Promise<string> {
  // const userSession = await getSession();

  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    // auth: userSession.session.provider_token,
  });
  console.log("Octokit instance:", octokit);

  try {
    const response = await octokit.rest.repos.createFork({
      owner: "andrewdddobusiness",
      repo: repoName,
    });

    console.log(response);
    return "";
    // console.log("Fork response:", response);
    // return response.data.clone_url;
  } catch (error: any) {
    console.error("Error creating GitHub repository:", error.message);
    throw error;
  }
}
