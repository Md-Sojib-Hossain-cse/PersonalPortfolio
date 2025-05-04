import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-8">
      <h1 className="text-center text-red-500 text-2xl font-semibold">
        Error 404 . Page Not Found !
      </h1>
      <Button className="mx-auto mb-8">
        <Link href="/">Back to Homepage</Link>
      </Button>
    </div>
  );
};

export default NotFound;
