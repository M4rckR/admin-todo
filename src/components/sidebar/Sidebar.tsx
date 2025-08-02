import Image from "next/image";
import { IoCalendar, IoCheckboxOutline, IoListOutline, IoLogoReact, IoBookOutline, IoPersonOutline } from "react-icons/io5";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SidebarItem } from "./SidebarItem";
import { LogoutButton } from "../LogoutButton";

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
  },
  {
    icon: <IoBookOutline />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },
  {
    icon: <IoPersonOutline />,
    title: "Profile",
    path: "/dashboard/profile",
  }
]

export const Sidebar = async () => {
  const session = await auth()

  if (!session) {
    return redirect('/');
  }

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
              src={session.user?.image || ''}
              width={128}
              height={128}
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              {session.user?.name}
            </h5>
            {/* <span className="hidden text-gray-400 lg:block">Admin</span> */}
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
          <LogoutButton />
        </div>
      </aside>
    </>
  );
};
