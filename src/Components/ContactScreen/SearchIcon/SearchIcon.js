import React, { useState, useEffect } from "react";
import { Plus, Search } from "react-feather";
import data from "../../../mockdata/contactData.json";

export default function SearchIcon({contacts,setContacts}) {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState(allData);

  useEffect(()=>{
    console.log("Filter Success")
  },[filterData])

  const handleSearch = (event) => {
    
    console.log(event.target.value,"event")
    console.log(data && data.data, "Handlesearch");
     const filterData = contacts && contacts.data.filter((res) => res.firstName == event.target.value)
     setContacts(filterData && filterData)
     console.log("filterData",filterData)
  };
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="text-add-contact-color relative left-9 top-4 ">
          <Search></Search>
        </div>
        <input
          type="search"
          className="p-5 pl-11 h-14 w-96 border-2 rounded-lg text-xl text-gray-500 no-underline outline-0"
          onChange={(event) => handleSearch(event)}
        />

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
  );
}

// <div className="flex justify-between">
//  <div className="h-[50px] w-[380px] border-[2.4px] flex gap-2 p-[10px] border-search-icon-border rounded-lg">
//    <div className="text-add-contact-color"><Search></Search></div>
//    <div className="text-add-contact-color font-normal text-[18px]">Search</div>

//   </div>
//   <div className="group h-[50px] w-[200px] border-[2.4px] flex gap-2 p-[10px] border-search-icon-border rounded-lg hover:bg-box-text-color hover:text-search-icon-border">
//    <div className="text-add-contact-color group-hover:text-search-icon-border"><Plus></Plus></div>
//    <div className="text-add-contact-color font-normal text-[18px] cursor-pointer group-hover:text-search-icon-border group-hover:font-medium">Add Contact</div>

//   </div>
// </div>
