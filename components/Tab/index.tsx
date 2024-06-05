import React, { useState } from "react";
interface TabData {
  tabNumber: number;
  label: string;
}

interface TabsProps {
  color: string;
  tabs: TabData[];
}

const Tabs: React.FC<TabsProps> = ({ color, tabs }) => {
  const [openTab, setOpenTab] = useState<number>(1);

  interface TabItemProps {
    tabNumber: number;
    label: string;
  }

  const TabItem: React.FC<TabItemProps> = ({ tabNumber, label }) => (
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 h-9 w-32 lg:w-[250px] lg:h-[55px] text-m lg:text-2xl shadow-md rounded-lg block leading-normal transition duration-200 " +
          (openTab === tabNumber
            ? "text-white bg-" + color
            : "text-" + color + "-600 bg-white")
        }
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(tabNumber);
        }}
        data-toggle="tab"
        href={`#link${tabNumber}`}
        role="tablist"
      >
        {label}
      </a>
    </li>
  );

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {tabs.map((tab) => (
            <TabItem
              key={tab.tabNumber}
              tabNumber={tab.tabNumber}
              label={tab.label}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
