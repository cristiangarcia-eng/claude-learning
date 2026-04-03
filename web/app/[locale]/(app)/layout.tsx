import { Sidebar } from "@/components/sidebar";
import { ProgressProvider } from "@/components/progress/progress-provider";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ProgressProvider>
  );
}
