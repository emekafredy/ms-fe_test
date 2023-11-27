import Image from "next/image";
import { menuItems } from "@/data";

export const AppMenuDropDown = () => {
  const { appsDropdown } = menuItems;

  return (
    <div className="fixed inset-0 z-[200] outline-none focus:outline-none rounded top-24 right-32">
      <div className="relative w-[900px] m-auto">
        <div className="bg-white mt-4 rounded-2xl py-2 px-3 w-[380px] float-right shadow-lg">
          <div className="my-4">
            {appsDropdown.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-start gap-4 py-4 px-4 rounded-2xl hover:shadow-md"
                >
                  <div className="border border-gray-200 rounded-lg p-2">
                    <Image src={item.icon} alt={item.title} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-primary-100">
                      {item.title}
                    </p>
                    <p className="text-xs text-secondary-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
