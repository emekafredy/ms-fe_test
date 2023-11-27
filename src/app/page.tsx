import { AppLink } from "@/components/Link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-6">HomePage UI Coming SOON!</h2>
      <AppLink to="/revenue" title="Visit Revenue" linkClass="primary" />
    </main>
  );
}
