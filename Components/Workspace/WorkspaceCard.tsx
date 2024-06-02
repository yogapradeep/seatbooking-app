import { IWorkspaceDetails } from "@/lib/Interfaces/IWorkspaceDetails";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody } from "react-bootstrap";
import { IoDiamondOutline } from "react-icons/io5";
import {
  MdOutlineAssistantDirection,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function WorkspaceCard({
  workspace,
}: {
  workspace: IWorkspaceDetails;
}) {
  const router = useRouter();
  const discountValue = workspace.day_pass_discounts_percentage["10"].value;
  const bulkPassPrice = Math.round(
    workspace.day_pass_price * (1 - discountValue / 100) * 10
  );

  return (
    <Card className="border-0 shadow-lg mb-3 mx-md-3 my-md-4">
      <CardBody className="p_12">
        <div className="d-flex justify-content-between mb-4  gap-md-2">
          <h5 className="text-primary fw-semibold font-subheading mb-0 text-wrap">
            {workspace.name}
          </h5>
          <a
            href={workspace.google_maps_url}
            target="_blank"
            className="text-decoration-none"
          >
            <Button
              type="button"
              variant="outline-secondary"
              className="d-flex flex-column align-items-center justify-content-between  p-1 px-2  bg-gray-light border-secondary-btn "
            >
              <MdOutlineAssistantDirection size={20} className="text-primary" />
              <p className="mb-0 fs_8 text-gray-400"> 5 Kms</p>
            </Button>
          </a>
        </div>
        <div className="mb-4 position-relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${workspace.images[0]}`}
            className="card-img object-fit-cover workspace-image"
            alt={workspace.name}
          />
          <div className=" position-absolute  bg-primary text-gray-light  rounded-1 p-1 workspace-badge d-flex align-items-center">
            <IoDiamondOutline size={16} className="yellow-icon" />
            <p className=" ms-1 mb-0  yellow-icon fw-medium font-small">
              Platinum
            </p>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center gap-1">
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => router.push(`workspace/${workspace.id}`)}
              className="d-flex align-items-center justify-content-between  p-2 p-md-3 bg-gray-light border-secondary-btn buy-button"
              disabled={!workspace.is_day_pass_enabled}
            >
              <div className="">
                <p className="mb-1 font-small text-secondary fw-medium text-start">
                  Day pass
                </p>
                <p className="mb-0 font-subheading fw-semibold text-primary ">
                  ₹ {workspace.day_pass_price}{" "}
                  <span className="font-verysmall text-secondary fw-medium">
                    / Day
                  </span>
                </p>
              </div>
              <div className="">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
              </div>
            </Button>

            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => router.push(`workspace/${workspace.id}`)}
              className="d-flex align-items-center justify-content-between p-2 p-md-3 bg-yellow-1 border-primary-btn buy-button position-relative"
              //   disabled={!workspace.is_day_pass_enabled}
            >
              <div className="">
                <p
                  className="mb-1 font-small text-secondary fw-medium text-start"
                  style={{ color: "#65624C" }}
                >
                  Bulk pass
                </p>
                <p className="mb-0 font-subheading fw-semibold text-primary">
                  ₹ {bulkPassPrice}{" "}
                  <span className="font-verysmall text-secondary fw-medium">
                    / 10 Days
                  </span>
                </p>
              </div>
              <div className="">
                <MdOutlineKeyboardDoubleArrowRight size={24} />
              </div>
              <div className=" position-absolute  bg-primary text-gray-light  rounded-1 p-1 discount-badge">
                <p className="mb-0 fs_8">{discountValue}% Discount</p>
              </div>
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
