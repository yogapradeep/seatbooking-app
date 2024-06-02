/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function NotFound() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
      <h3>404 - Page Not Found</h3>
      <p>Sorry, the page you're looking for does not exist.</p>
      <Link href="/home">
        <Button className="bg-yellow-1 text-white rounded-1 px-4 py-3 font-heading flex-grow-1">
          Go back to homepage
        </Button>
      </Link>
    </div>
  );
}
