"use client";

import "@fortawesome/fontawesome-free/css/all.css";
import { Protect, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";

import CardImage from "@/public/next.svg";
import ProtectedButton from "../Protected";
import { checkRole } from "@/utils/roles";

const NavBar = () => {
  return (
    <div className="bg-[#FAF0E6]">
      <div className="  sm:px-6 lg:px-8 fixed top-0 w-full rounded-xl z-50 ">
        <div
          className="px-4 sm:px-6 lg:px-8 bg-primary bg-opacity-60 backdrop-blur-md rounded-3xl bg-gradient-to-b from-teal-600 via-teal-600 to-teal-500"
          style={{
            background:
              "linear-gradient(-60deg, #151F63 0%, rgba(21, 31, 99, 0.93) 70%)",
          }}
        >
          <div className="mt-7 p-4 md:p-5 flex md:flex-row justify-between items-center ">
            <div className="flex items-center gap-4 text-background text-white font-bold text-3xl mb-2 md:mb-0 lg:mr-4">
              <div>
                {/* <Link href="/">
                  <Image
                    alt="together"
                    src={CardImage}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Link> */}
              </div>
              <div>
                <Link href="/">
                  <p className="text-xl md:text-3xl lg:text-3xl">
                    One Experience
                  </p>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-row text-white items-center md:justify-center flex-grow space-x-4">
              <div className="flex items-center space-x-1 text-background font-heavy">
                <i className="text-white fa-solid fa-house-user"></i>
                <Link href="/home">
                  <div className="text-lg">Home</div>
                </Link>
              </div>
              <div className="flex items-center space-x-1 text-background font-heavy">
                <i className="text-white fa-solid fa-circle-info"></i>

                <Link href="/user">
                  <div className="text-lg">Service</div>
                </Link>
              </div>

              <div className="flex items-center space-x-1 text-background font-heavy">
                <i className="text-white fa-solid fa fa-camera"></i>
                <Link href="/recordings">
                  <div className="text-lg">Recordings</div>
                </Link>
              </div>
              <div className="flex items-center space-x-1 text-background font-heavy">
                <i className="text-white fa-solid fa fa-rss-square"></i>
                <Link href="/admin/dashboard">
                  <Protect
                    permission="org:sys_profile:manage"
                    fallback={<p className="text-lg">Only an Admin</p>}
                  >
                    <Button>Admin</Button>
                  </Protect>
                </Link>
              </div>
              <div>
                <UserButton />
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="lg:hidden">
                <Menu color="white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/">
                  <DropdownMenuItem>Home</DropdownMenuItem>
                </Link>
                <Link href="/user">
                  <DropdownMenuItem>Service</DropdownMenuItem>
                </Link>
                <Link href="/recordings">
                  <DropdownMenuItem>Recordings</DropdownMenuItem>
                </Link>
                <Link href="/admin/dashboard">
                  <DropdownMenuItem>
                    <Protect
                      permission="org:sys_profile:manage"
                      fallback={<p className="">Only an Admin</p>}
                    >
                      <Button>Admin</Button>
                    </Protect>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
