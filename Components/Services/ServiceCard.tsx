import { IServiceItem } from "@/lib/Interfaces/IServiceItem";

export default function ServiceCard({
  services,
}: {
  services: IServiceItem[];
}) {
  return (
    <div className="d-flex gap-3 flex-wrap justify-content-between ">
      {services.map((item: IServiceItem, index: number) => (
        <div
          key={index}
          className="d-flex flex-column flex-md-row bg-white justify-content-center align-items-center p_12 rounded-2 service-text-container gap-2 gap-lg-3 fw-medium py-md-4"
        >
          {item.icon}
          <p className="mb-0 font-medium service-text">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
