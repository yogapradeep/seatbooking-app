import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
      <h3>This is landing Page</h3>
      <Link href="/home">
        <Button className="bg-yellow-1 text-white rounded-1 px-4 py-3 font-heading flex-grow-1">
          Go back to Application or homepage
        </Button>
      </Link>
    </div>
  );
}
