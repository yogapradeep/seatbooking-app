import Image from "next/image";
import { Card, CardBody } from "react-bootstrap";
import appStoreImage from "../public/assets/appstoreImage.png";
import appImage from "../public/assets/footerImage2.png";
import playStoreImage from "../public/assets/playstoreImage.png";

export default function Footer() {
  return (
    <>
      <section
        id="footer-section"
        className="mt-5 pt-4 container px-3  mb-md-5 pt-md-5"
      >
        <h2 className="text-heading fw-bold mb-4 pb-2 pb-md-4">
          Download our app now
        </h2>

        <div>
          <Card className="border-0 shadow-lg  footer-image-card ">
            <CardBody className="pb-md-0">
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="footer-image-container">
                  <Image src={appImage} className="" alt="app " />
                  <div className="d-flex gap-2 ps-3 d-md-none">
                    <a
                      href="https://www.youtube.com/c/BHIVE"
                      target="_blank"
                      title="playstore"
                    >
                      {" "}
                      <Image
                        src={playStoreImage}
                        className=""
                        alt="playstore link"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/bhiveworkspace/"
                      target="_blank"
                      title="appstore link"
                    >
                      <Image src={appStoreImage} className="" alt="app " />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mb-md-0  ms-md-2 ms-lg-5 pt-md-4">
                  <p className="text-gray-4 mb-0 mt-3 fw-medium ">
                    Boost your productivity with the BHIVE Workspace app.
                    Elevate your workspace, collaborate efficiently, and unlock
                    exclusive perks.
                  </p>
                  <div className="d-flex gap-4 d-none d-md-flex my-4">
                    <a
                      href="https://www.youtube.com/c/BHIVE"
                      target="_blank"
                      title="playstore"
                    >
                      {" "}
                      <Image
                        src={playStoreImage}
                        className=""
                        alt="playstore link"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/bhiveworkspace/"
                      target="_blank"
                      title="appstore link"
                    >
                      <Image src={appStoreImage} className="" alt="app " />
                    </a>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
      <footer>
        <div className="mt-4">
          <p className="footer-text p-3 mb-0 font-small text-center">
            © Copyright {new Date().getFullYear()}.{" "}
            <a
              href="https://bhiveworkspace.com/"
              className="text-decoration-none"
            >
              Bhive Private Limited
            </a>
          </p>
        </div>
      </footer>
      {/* Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks. */}
    </>
  );
}
