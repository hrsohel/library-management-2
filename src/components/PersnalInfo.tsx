import React from "react";
import Link from "next/link";
import { userData } from "../../typeScript/book-data";

const PersnalInfo = ({
  userData
}: {
  userData: userData
}) => {
  return (
    <>
      <div className="my-2">
        <Link
          href="/profile/update-profile"
          className="bg-white px-2 py-1 text-[#0a298c] text-[.75rem] rounded-sm font-semibold"
        >
          Update info
        </Link>
        <div className="flex items-center justify-between gap-3 text-[.75rem] mt-2">
          <h2>Name</h2>
          <p className="text-[#fff] text-right">{userData.fullName}</p>
        </div>
        <div className="flex items-center justify-between gap-3 text-[.75rem]">
          <h2>Email</h2>
          <p className="text-[#fff] text-right">{userData.email}</p>
        </div>
        <div className="flex items-center justify-between gap-3 text-[.75rem]">
          <h2>Phone</h2>
          <p className="text-[#fff] text-right">{userData.phone}</p>
        </div>
        <div className="flex items-center justify-between gap-3 text-[.75rem]">
          <h2>Address</h2>
          <p className="text-[#fff] text-right">{userData.address}</p>
        </div>
        <div className="flex items-center justify-between gap-3 text-[.75rem]">
          <h2>Post code</h2>
          <p className="text-[#fff] text-right">{userData.postCode}</p>
        </div>
      </div>
    </>
  );
};

export default React.memo(PersnalInfo);
