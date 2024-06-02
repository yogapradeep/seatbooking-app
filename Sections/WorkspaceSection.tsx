"use client";
import WorkspaceCard from "@/Components/Workspace/WorkspaceCard";
import { useWorkspaceDetails } from "@/Context/WorkspaceContext";

export default function WorkspaceSection() {
  const context = useWorkspaceDetails();

  return (
    <section
      id="services-section"
      className="my-5 pt-4 pt-md-5 container px-3 "
    >
      <h2 className="text-heading fw-bold mb-4 pb-2 pb-md-4">Our Spaces </h2>

      <div>
        <div className="d-flex flex-column flex-md-row  align-items-center flex-wrap">
          {context?.workspaceDetails?.map((workspace) => (
            <div className="col-md-6 col-lg-4" key={workspace.id}>
              <WorkspaceCard workspace={workspace} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
