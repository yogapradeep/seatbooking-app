import WorkspaceContent from "@/Components/Workspace/WorkspaceContent";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  console.log("params id", params.id);

  return <WorkspaceContent />;
}
