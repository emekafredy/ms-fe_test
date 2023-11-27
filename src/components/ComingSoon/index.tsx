import { FC } from "react";
import Link from "next/link";

export const ComingSoon: FC<{ pageName: string }> = ({ pageName }) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-6">{pageName} UI Coming SOON!</h2>
      <Link
        href="/revenue"
        className="text-lg bg-primary-100 text-white px-12 py-4 rounded-full hover:bg-opacity-90"
      >
        Visit Revenue
      </Link>
    </main>
  );
};
