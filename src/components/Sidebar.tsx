import Image from "next/image";
import { IoCalendar, IoCheckboxOutline, IoListOutline, IoLogoReact } from "react-icons/io5";
import { SidebarItem } from "./SidebarItem";
import { CiLogout } from "react-icons/ci";

const menuItems = [
  {
    icon: <IoCalendar />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest Todos",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Server Actions",
    path: "/dashboard/server-todos",
  }
]

export const Sidebar = () => {
  return (
    <>
      {/* TODO: src/components <Sidebar /> */}
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            {/* TODO: Next/Link hacia dashboard */}
            <a href="#" title="home">
              {/* Next/Image */}
              <IoLogoReact className="mr-2 text-3xl" />
            </a>
          </div>

          <div className="mt-8 text-center">
            {/* Next/Image */}
            <Image
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              width={128}
              height={128}
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Cynthia J. Watts
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {/* TODO: src/components <SidebarItem /> */}
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

            {menuItems.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
