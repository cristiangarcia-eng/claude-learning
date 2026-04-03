import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-muted-foreground mb-6">
          This page doesn&apos;t exist yet.
        </p>
        <Link
          href="/en"
          className="text-brand-green hover:underline"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
