import React, { useEffect, useState } from "react";
import data from "../../../mockdata/contactData.json";
import { Plus, Search, FiMail, Mail, PhoneCall, User } from "react-feather";
import ContactDetails from "../../ContactDetails";

export default function ContactCard() {
  const [initalContacts, setinitialContacts] = useState(data && data.data);
  const [contacts, setContacts] = useState(initalContacts);
  const [alert, setAlert] = useState({
    message: "No search result found in ",
    searchString: "",
  });

  // Handlesearch
  const handleSearch = (searchString) => {
    if (searchString === "") {
      console.log("Empty string", searchString, "Contacts", contacts);
      setContacts(initalContacts);
      setAlert({ ...alert, searchString: "" });

      return;
    }

    const filterData =
      contacts &&
      contacts.filter(
        (res) =>
          res["firstName"]
            .toString()
            .toLowerCase()
            .includes(searchString.toLowerCase()) ||
          res["lastName"]
            .toString()
            .toLowerCase()
            .includes(searchString.toLowerCase())
      );

    filterData && filterData.length > 0
      ? setContacts(filterData && filterData)
      : setAlert({ ...alert, searchString: searchString });

    console.log("filterData", filterData);
  };
  return (
    <div>
      <div class="flex flex-col p-12 gap-16">
        <div className="flex justify-between">
          <div className="flex">
            <div className="text-add-contact-color relative left-9 top-4 ">
              <Search></Search>
            </div>
            <input
              type="search"
              className="p-5 pl-11 h-14 w-96 border-2 rounded-lg text-xl text-gray-500 no-underline outline-0"
              onChange={(event) => handleSearch(event.target.value)}
            />
          </div>
          <div className="group h-[50px] w-[200px] border-[2.4px] flex gap-2 p-[10px] border-search-icon-border rounded-lg hover:bg-box-text-color hover:text-search-icon-border">
            <div className="text-add-contact-color group-hover:text-search-icon-border">
              <Plus></Plus>
            </div>
            <div className="text-add-contact-color font-normal text-[18px] cursor-pointer group-hover:text-search-icon-border group-hover:font-medium">
              Add Contact
            </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          {alert.searchString === "" ? (
            contacts &&
            contacts.map((contact, index) => (
              <div className="px-14 py-8 border-gray-200 border rounded-lg shadow-md flex flex-col gap-2">
                {/* Name */}
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <div className="font-sans font-medium text-xl text-[#27272A]">
                      {contact.firstName + " " + contact.lastName}
                    </div>
                    <div className="badge">
                      {contact.type === 0 ? "Billing" : "Others"}
                    </div>
                  </div>
                  <div className="avatar">
                    {contact.firstName.charAt(0) + contact.lastName.charAt(0)}
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  {/* <ContactDetails
                    headStyle="text-gray-500"
                    iconIndex="1"
                    subheadStyle="text-sky-600"
                    value={contact.email}
                  ></ContactDetails> */}

                  <div className="flex gap-3">
                    <div className="text-gray-500">
                      <Mail></Mail>
                    </div>
                    <div className="text-sky-600">{contact.email}</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-gray-500">
                      <PhoneCall></PhoneCall>
                    </div>
                    <div className="text-text-color text-lg">
                      {contact.phoneNumber}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-text-color">
                      <User></User>
                    </div>
                    <div className="text-text-color text-lg">
                      {contact.userName}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex gap-2">
              <div className="text-lg text-gray-800 font-bold">
                {alert && alert.message}
              </div>
              <div className="text-lg text-red-600 font-bold">
                {alert && alert.searchString}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
