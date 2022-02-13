import React from "react";
import ContactCard from "../ContactsCard/ContactCard";

export default function Header() {
  const headerItems = [
    "Contacts",
    "Address",
    "Billing",
    "Taxation",
    "Invoicing",
    "Hierarchy",
    "Agents",
    "Documents",
    "Payment Profile",
    "Addional fields",
  ];
  return (
    <div className=" bg-[#fafafa] rounded-lg font-sans flex flex-col">
      <div className="flex pt-10 pl-3 pr-3 pb-0 justify-between shadow-sm shadow-shadow-border-color gap-3">
        {headerItems && headerItems.map((item, index) => (
          <div>
            <button className=" pl-6 pr-6 pt-3 pb-3 text-[#71717A] font-medium text-xl transition-all hover:border-b-4 hover:border-[#6B21A8] hover:rounded-t-md  hover:bg-bg-color-box hover:text-[#4C1D95]">
              {item}
            </button>
          </div>
        ))}
      </div>

      <ContactCard></ContactCard>
    </div>
  );
}
