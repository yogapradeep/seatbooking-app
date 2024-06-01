import ServiceCard from "@/Components/Services/ServiceCard";
import AffordableIcon from "@/lib/icons/AffordableIcon";
import CalenderWithStarIcon from "@/lib/icons/CalenderWithStarIcon";
import ComfortChairIcon from "@/lib/icons/ComfortChairIcon";
import GymIcon from "@/lib/icons/GymIcon";
import { IServiceItem } from "@/lib/icons/Interfaces/IServiceItem";
import { FaWifi } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";
import { PiClockClockwiseBold } from "react-icons/pi";
import { TbCoffee } from "react-icons/tb";

export default function ServicesSection() {
  const services: IServiceItem[] = [
    {
      name: "Community Events",
      icon: <CalenderWithStarIcon className="yellow-icon" size={32} />,
    },
    {
      name: "Gym Facilities",
      icon: <GymIcon className="yellow-icon" size={32} />,
    },
    {
      name: "Highspeed Wifi",
      icon: <FaWifi className="yellow-icon" size={32} />,
    },
    {
      name: "Cafe & Tea Bar",
      icon: <TbCoffee className="yellow-icon" size={32} />,
    },
    {
      name: "Affordable",
      icon: <AffordableIcon className="yellow-icon" size={32} />,
    },
    {
      name: "Comfort Lounges",
      icon: <ComfortChairIcon className="yellow-icon" size={32} />,
    },
    {
      name: "Quick Booking",
      icon: <PiClockClockwiseBold className="yellow-icon" size={32} />,
    },
    {
      name: "Sports Area",
      icon: <MdSportsTennis className="yellow-icon" size={32} />,
    },
  ];

  return (
    <section id="services-section" className="my-5 pt-4 container px-3 ">
      <h2 className="text-heading fw-bold mb-4 pb-2 pb-md-4">
        Why Choose us?{" "}
      </h2>

      <div>
        <ServiceCard services={services} />
      </div>
    </section>
  );
}
