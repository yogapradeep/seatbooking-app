"use client";
import { useWorkspaceDetails } from "@/Context/WorkspaceContext";
import { IWorkspaceDetails } from "@/lib/Interfaces/IWorkspaceDetails";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Card, CardBody } from "react-bootstrap";
import {
  MdLocationOn,
  MdOutlineKeyboardDoubleArrowRight,
  MdPhone,
} from "react-icons/md";

export default function WorkspaceContent() {
  const urlParams = useParams();
  const router = useRouter();
  const context = useWorkspaceDetails();

  const [workspace, setWorkspace] = useState<IWorkspaceDetails>();

  useEffect(() => {
    if (context && context.workspaceDetails) {
      const filteredDetails = context.workspaceDetails.find(
        (workspace) => workspace.id === urlParams.id
      );

      if (filteredDetails) {
        setWorkspace(filteredDetails);
      }
    }
  }, [context, urlParams]);

  if (!workspace) {
    return <></>;
  }

  const discountValue = workspace.day_pass_discounts_percentage["10"].value;
  const bulkPassPrice = Math.round(
    workspace.day_pass_price * (1 - discountValue / 100) * 10
  );

  return (
    <section className="pt-5 mt-5 container-fluid">
      <div className="my-3">
        <a href="/home" className="text-decoration-none text-primary fw-bold ">
          {" "}
          Home {" > "} {workspace.name}
        </a>
      </div>

      <div className="d-flex flex-column flex-md-row position-relative">
        <div className="col-md-8">
          <Card className="border-0 shadow-lg mb-3 mx-md-3 my-md-4 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${workspace.images[0]}`}
              className="card-img-top object-fit-cover workspace-image"
              alt={workspace.name}
            />
            <CardBody className="">
              <div className="my-4">
                <h4 className="text-primary fw-semibold font-heading mb-0">
                  Details
                </h4>
                <div className="mt-3">
                  <p className="text-primary  font-subheading mb-2 text-wrap">
                    <span className="fw-semibold">Workspace Name</span> :{" "}
                    {workspace.name}
                  </p>
                  <p className="text-primary  font-subheading mb-2 text-wrap">
                    <span className="fw-semibold">Contact Person:</span>{" "}
                    {workspace?.contact_person_name}
                  </p>
                  <p className="text-primary  font-subheading mb-2 text-wrap">
                    <span className="fw-semibold"> Working Hours :</span>{" "}
                    {workspace?.working_hours_start} to{" "}
                    {workspace?.working_hours_end}
                  </p>
                  <p className="text-primary  font-subheading mb-2 text-wrap">
                    <span className="fw-semibold">Amenities :</span>{" "}
                    {workspace.amenities?.join(", ")}
                  </p>

                  {workspace.facilities && (
                    <p className="text-primary  font-subheading mb-2 text-wrap">
                      {workspace?.facilities}
                    </p>
                  )}
                  {workspace.rules && (
                    <p className="text-primary  font-subheading mb-2 text-wrap">
                      {workspace?.rules}
                    </p>
                  )}
                  {workspace.description ? (
                    <p className="text-primary  font-subheading mb-2 text-wrap">
                      {workspace?.description}
                    </p>
                  ) : (
                    <>
                      <p className="text-primary  font-subheading mb-2 text-wrap">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Explicabo adipisci sunt consequatur quis, cumque
                        excepturi reiciendis asperiores nihil? Illo beatae
                        deleniti dolore ratione officiis ullam molestiae
                        reprehenderit vitae quaerat cupiditate quod expedita ea,
                        sapiente in illum, earum nihil aliquid amet.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="border-0 shadow-lg mb-3 mx-md-3 my-md-4 d-none d-md-block">
            <CardBody className="p_12">
              <div className="d-flex flex-column justify-content-between align-items-center mb-4  gap-md-2">
                <h4 className="text-primary fw-bold font-heading mb-3">
                  Book Now
                </h4>
                <div className="d-flex flex-md-column flex-lg-row justify-content-between align-items-center gap-1">
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

          <Card className="border-0 shadow-lg mb-3 mx-md-3 my-md-4 ">
            <CardBody className="">
              <div className="d-flex flex-column ">
                <a
                  href="tel:+91 95386 77774"
                  className="text-decoration-none d-flex align-items-center mb-3"
                >
                  <MdPhone size={28} className="yellow-icon" />
                  <p className="font-subheading mb-0 fw-medium ms-3">
                    +91 95386 77774
                  </p>
                </a>

                <a
                  href={workspace.google_maps_url}
                  target="_balnk"
                  className="text-decoration-none d-flex align-items-center mb-5"
                >
                  {/* <FaLocationDot className="yellow-icon flex-grow-1" /> */}
                  <p className="flex-grow-1">
                    <MdLocationOn size={28} className="yellow-icon " />
                  </p>
                  <p className="font-subheading mb-0 fw-medium text-wrap ms-3">
                    {workspace.address}
                  </p>
                </a>

                <div className="w-100 map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.914456384462!2d77.6406548!3d12.9732196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a87c89b05b%3A0x310e3359eaf1ee4f!2sBHIVE%20Platinum%20Indiranagar!5e0!3m2!1sen!2sin!4v1717334993636!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* mobile bottom button */}
        <Card className="border-0 shadow-lg mb-3 mx-md-3 my-md-4  d-md-none fixed-bottom bottom-0">
          <CardBody className="p-2">
            <div className="d-flex flex-column justify-content-between align-items-center   gap-md-2 my-2">
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
      </div>
    </section>
  );
}
