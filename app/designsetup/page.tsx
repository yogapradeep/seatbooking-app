import ComfortChairIcon from "@/lib/icons/ComfortChairIcon";
import AffordableIcon from "@/lib/icons/affordableIcon";
import CalenderWithStarIcon from "@/lib/icons/calenderWithStarIcon";
import GymIcon from "@/lib/icons/gymIcon";
import Image from "next/image";
import React from "react";
import { CgGym } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdPhone,
  MdSportsTennis,
} from "react-icons/md";
import { PiClockClockwiseBold } from "react-icons/pi";
import { TbCoffee } from "react-icons/tb";
import appStoreImage from "../../public/assets/appstoreImage.png";
import footerImage from "../../public/assets/footerImage.png";
import heroImage from "../../public/assets/heroImage.png";
import heroBg from "../../public/assets/herobg.png";
import logo from "../../public/assets/logo.png";
import playStoreImage from "../../public/assets/playstoreImage.png";

export default function page() {
  return (
    <React.Fragment>
      <div className="">
        <div>
          <p className="font-heading">
            font-heading - desktop: 36px, tablet: 30px, mobile: 24px
          </p>
          <p className="font-subheading">
            font-subheading - desktop: 20px, tablet: 18px, mobile: 18px
          </p>
          <p className="font-medium">
            font-medium - desktop: 18px, tablet: 16px, mobile: 16px
          </p>
          <p className="font-regular">
            font-regular - desktop: 16px, tablet: 14px, mobile: 14px
          </p>
          <p className="font-small">
            font-small - desktop: 14px, tablet: 12px, mobile: 12px
          </p>
          <p className="font-small">
            font-verysmall - desktop: 12px, tablet: 8px, mobile: 8px
          </p>
          <h1 className="text-primary">text to test (Primary)</h1>
          <h2 className="text-secondary">text to test (Secondary)</h2>
          <h3 className="text-success">text to test (Success)</h3>
          <h4 className="text-info">text to test (Info)</h4>
          <h5 className="text-warning">text to test (Warning)</h5>
          <h6 className="text-danger">text to test (Danger)</h6>
          <p className="text-light fs-1 bg-dark">text to test (Light)</p>
          <p className="text-dark fs-2">text to test (Dark)</p>
          <p className="text-white bg-dark fs-3">text to test (White)</p>
          <p className="text-black fs-4">text to test (Black)</p>
          <p className="text-gray-light fs-4">text to test (Gray Light)</p>
          <p className="text-gray-1 fs-5">text to test (Gray 1)</p>
          <p className="text-gray-2 fs-6">text to test (Gray 2)</p>
          <p className="text-gray-3">text to test (Gray 3)</p>
          <p className="text-gray-4">text to test (Gray 4)</p>
          <p className="text-gray-5">text to test (Gray 5)</p>
          <p className="text-yellow-1">text to test (Yellow 1)</p>
          <p className="text-yellow-2">text to test (Yellow 2)</p>
        </div>

        <div className="">
          <p className="fs-1 fw-bold">Icons</p>

          <div className="d-flex justify-content-between yellow-icon fs-3">
            <PiClockClockwiseBold />
            <TbCoffee />
            <FaWifi />
            <MdSportsTennis />
            <MdOutlineKeyboardDoubleArrowRight />
            <CgGym />
            <MdPhone />
            <AffordableIcon />
            <CalenderWithStarIcon />
            <ComfortChairIcon />
            <GymIcon />
          </div>

          <div>
            <p className="fs-1 fw-bold">Static Images</p>
            <Image src={logo} alt="logo" width={120} height={60} />
            <Image src={heroBg} className="col-4" alt="heroBg" />
            <Image src={heroImage} className="col-4" alt="Hero" />
            <Image src={footerImage} className="col-4" alt="app " />
            <Image src={playStoreImage} className="col-4" alt="Hero" />
            <Image src={appStoreImage} className="col-4" alt="app " />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
