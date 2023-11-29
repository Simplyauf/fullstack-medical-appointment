import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import { Tab } from "@headlessui/react";
import { useState } from "react";

const Tabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="mt-[1rem] w-full bg-gray-100">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex w-full justify-between items-center h-[53px] gap-1  bg-white shadow-small text-base md:rounded-[10px] border-t border-t-bs transition-all">
          <Tab
            className={`w-[33%] h-full border-b-[3px] md:rounded-l-[10px] border-transparent text-[14px] ${
              selectedIndex === 0 &&
              "text-[#14bef0] border-b-[#14bef0] bg-[#eefbff] font-medium"
            }`}
          >
            Message
          </Tab>
          <Tab
            className={`w-[33%] h-full border-b-[3px] border-transparent text-[14px] ${
              selectedIndex === 1 &&
              "text-[#14bef0] border-b-[#14bef0] bg-[#eefbff] font-medium"
            }`}
          >
            Voice Call
          </Tab>
          <Tab
            className={`w-[33%] h-full border-b-[3px] border-transparent text-[14px] ${
              selectedIndex === 2 &&
              "text-[#14bef0] border-b-[#14bef0] bg-[#eefbff] font-medium"
            }`}
          >
            Video Call
          </Tab>
        </Tab.List>

        <Tab.Panels className="w-full pt-4 transition-all">
          <Tab.Panel>
            <Tab1 />
          </Tab.Panel>
          <Tab.Panel>
            <Tab2 />
          </Tab.Panel>
          <Tab.Panel>
            <Tab3 />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
