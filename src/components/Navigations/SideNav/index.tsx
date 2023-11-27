import { SideNavMenu } from "./SideNavMenu";

export const SideNav = () => {
  return (
    <div
      className="fixed z-[500] bg-white outline-none focus:outline-none
      top-[35%] left-6 shadow-xl shadow-gray-300 rounded-full"
    >
      <div className="p-2 rounded-full">
        <SideNavMenu />
      </div>
    </div>
  );
};
