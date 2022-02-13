import React, { useEffect, useState } from "react";
import { Plus, Search, FiMail, Mail, PhoneCall, User } from "react-feather";

import data from "../../../mockdata/contactData.json";
import SearchIcon from "../SearchIcon/SearchIcon";

import ReactSearchBox from "react-search-box";
import Context from "@mui/base/TabsUnstyled/TabsContext";
export default function ContactCard() {
  const [contacts, setContacts] = useState([{
    "firstName":"Jane",
    "lastName":"Cooper",
    "type":0,
    "email":"bill.brown@nztechnologygroup.com",
    "phoneNumber":"+1 (345) 863 2098",
    "userName":"janecooper"
},
{
    "firstName":"Jane",
    "lastName":"Fisher",
    "type":1,
    "email":"bill.brown@nztechnologygroup.com",
    "phoneNumber":"+1 (345) 863 2098",
    "userName":"janecooper"
},
{
    "firstName":"Esther",
    "lastName":"Howard",
    "type":0,
    "email":"bill.brown@nztechnologygroup.com",
    "phoneNumber":"+1 (345) 863 2098",
    "userName":"janecooper"
}
]);
  const [searchString,setSearchString] = useState("");

  // useEffect(() => {
  //   console.log("Coming",contacts );
  // }, [contacts]);

  const handleSearch = () => {
    console.log(searchString,"SearchString")
    // console.log(event.target.value,"event")
    console.log(contacts && contacts, "contacts")
     const filterData = contacts && contacts.filter((res) => res.firstName == searchString || res.lastName==searchString) 
     filterData && filterData.length > 0 && setContacts(filterData && filterData)
     console.log("filterData",filterData)
  };
  return (
    <div>
      <div class="flex flex-col p-12 gap-16">
        {/* <SearchIcon contacts = {contacts} setContacts= {setContacts}></SearchIcon>  */}

        <div className="flex justify-between">
          <div className="flex">
            <div className="text-add-contact-color relative left-9 top-4 ">
              <Search></Search>
            </div>
            <input
              type="search"
              className="p-5 pl-11 h-14 w-96 border-2 rounded-lg text-xl text-gray-500 no-underline outline-0"
              onChange={(event) => setSearchString(event.target.value)}
            />
            <button onClick={()=>handleSearch()}>Submit</button>


            {/* <div className="h-[200px] bg-red-200 w-[500px] p-14">
{console.log("filterdata",filterData)}
  {filterData && filterData.map((e)=>(
     <div>{e.firstName}</div>
   
  ))}
 
</div> */}

            {/* <div className="h-[50px] w-[380px] border-[2.4px] flex gap-2 p-[10px] border-search-icon-border rounded-lg">
        <div className="text-add-contact-color"><Search></Search></div>
       <input className="text-add-contact-color font-normal  text-[18px]" type="search" />

      </div> */}
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
          {console.log("contacts",contacts && contacts.data)}
          {contacts && 
            contacts.map((contact, index) => (

            
            
              <div className="px-14 py-8 border-gray-200 border rounded-lg shadow-md flex flex-col gap-2">
                {console.log("contact",contact)}
                {/* Name */}
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <div className="font-sans font-medium text-xl text-[#27272A]">
                      {contact.firstName + " " + contact.lastName}
                    </div>
                    <div className="badge">
                      {contact.type == 0 ? "Billing" : "Others"}
                    </div>
                  </div>
                  <div className="avatar">
                    {/* {contact.firstName.charAt(0) + contact.lastName.charAt(0)} */}
                  </div>
                </div>

                <div class="flex flex-col gap-3">
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
            ))}
        </div>
      </div>
    </div>
  );
}
