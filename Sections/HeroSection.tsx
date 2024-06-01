import Image from "next/image";
import heroImage from "../public/assets/heroImage2.png";
import heroBg from "../public/assets/herobg.png";

export default function HeroSection() {
  return (
    <section id="hero-section">
      <div className="d-md-flex">
        <div
          style={{
            backgroundImage: `url(${heroBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="colmd-6 col-lg-8 d-none d-md-flex p-0"
        >
          <h1 className="fs_58 m-5 p-5  ps-md-0 text-wrap fw-bold">
            <p className="ps-4 hero-text">
              Host your meeting with world-class amenities. Starting at{" "}
              <span className="text-yellow-1">₹199/-!</span>
            </p>
          </h1>
        </div>
        <div className="col-lg-4 p-0">
          <Image src={heroImage} alt="Hero" className="object-fit-cover " />
          <h1 className="d-md-none font-heading fw-semibold text-wrap container mt-3">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-yellow-1">₹199/-!</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
