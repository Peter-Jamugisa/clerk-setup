import NavBar from "@/components/ui/Navbar";
import React from "react";
import { ArrowBigDownDash } from "lucide-react";
import { CircleX } from "lucide-react";
import { Button } from "./ui/button";

interface Record {
  id: number;
  title: string;
  url: string;
}

interface Group {
  name: string;
  Records: Record[];
}

const RecordsData: Group[] = [
  {
    name: "Faith Series",
    Records: [
      { id: 1, title: "Faith Record 1", url: "/path/to/Record1.mp3" },
      { id: 2, title: "Faith Record 2", url: "/path/to/Record2.mp3" },
    ],
  },
  {
    name: "Growth Series",
    Records: [
      { id: 3, title: "Growth Record 1", url: "/path/to/Record3.mp3" },
      { id: 4, title: "Growth Record 2", url: "/path/to/Record4.mp3" },
    ],
  },
];

function Records() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4 mt-40">
        <h1 className="text-2xl font-bold mb-4">Records</h1>
        {RecordsData.map((group) => (
          <div key={group.name} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
            {group.Records.map((Record) => (
              <div
                key={Record.id}
                className="flex justify-between items-center mb-2 p-2 border-b"
              >
                <span>{Record.title}</span>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row bg-black hover:bg-red-700 items-center justify-center rounded-2xl">
                    <CircleX className="text-white font-extrabold ml-2"/>
                    <Button className="text-white hover:bg-red-700 mr-2 font-extrabold">
                      Delete
                    </Button>
                  </div>
                  <div className="flex flex-row bg-blue-700 text-blue-500 hover:bg-green-800 items-center justify-center rounded-2xl mr-3">
                    <ArrowBigDownDash className="text-white font-extrabold ml-2"/>
                    <Button className="text-white  hover:bg-green-800 bg-blue-700 font-extrabold">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Records;
