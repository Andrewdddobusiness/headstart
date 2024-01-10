import { Button } from "@nextui-org/react";
import Link from "next/link";

import { createGitHubRepo } from "@/actions/github/github-clone";
import { linkGithubRepo } from "@/actions/github/github-link";
import { inviteViewerToRepo } from "@/actions/github/github-invite-viewer";

export default function BuildButton() {
  const handleCreateRepo = async () => {
    try {
      await createGitHubRepo("headstart-selections");
    } catch (error: any) {
      console.error("Error creating GitHub repository:", error.message);
      // Handle error, show a message, etc.
    }
  };

  return (
    <div className="flex flex-col items-center mb-12">
      {/* <Link href=""> */}
      <Button
        color="primary"
        variant="solid"
        radius="full"
        style={{ width: "150px" }}
        className="transition-transform duration-300 transform hover:scale-110 font-bold"
        onClick={() => handleCreateRepo()}
      >
        create build
      </Button>
      {/* </Link> */}
    </div>
  );
}
