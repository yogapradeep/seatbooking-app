import Image from "next/image";
import { Button } from "react-bootstrap";
import { MdPhone } from "react-icons/md";
import logo from "../../public/assets/logo.png";

export default function Navbar() {
  return (
    <nav id="main-navbar" className="bg-white shadow-lg">
      <div className="container-fluid  bg-white  fixed-top py-3 py-md-4 ">
        <div className="container d-flex align-items-center justify-content-between">
          <div>
            <a href="/home">
              <Image
                src={logo}
                style={{ width: "125px", height: "40px" }}
                alt="Logo"
                className="object-cover"
              />
            </a>
          </div>
          <div>
            <a href="tel:+91 95386 77774" className="text-decoration-none">
              <Button
                type="button"
                variant="outline-secondary"
                className="yellow-icon px-2 py-1 border-primary-btn"
              >
                <MdPhone size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
