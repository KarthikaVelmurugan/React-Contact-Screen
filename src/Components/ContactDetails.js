import React from "react";
import { Plus, Search, FiMail, Mail, PhoneCall, User } from "react-feather";


export default function ContactDetails(
  headStyle,
  iconIndex,
  subheadStyle,
  value
) {
  return (
    <div className="flex gap-3">
      <div className={headStyle}>
        {iconIndex && iconIndex === "1" ? (
          <Mail></Mail>
        ) : iconIndex === "2" ? (
          <PhoneCall></PhoneCall>
        ) : (
          <User></User>
        )}
      </div>
      <div className={subheadStyle}>{value}</div>
    </div>
  );
}
