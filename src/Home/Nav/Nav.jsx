import { useState } from "react";

const Nav = () => {
  // Step 1: Initialize a state variable to hold the search term
  const [AreaSearch, setAreaSearch] = useState("");
  const [NameSearch, setNameSearch] = useState("");

  // Step 2: Update the state whenever the user types in the input field
  const handleAreaInput = (event) => {
    setAreaSearch(event.target.value);
  };
  const handleNameInput = (event) => {
    setNameSearch(event.target.value);
  };

  return (
    <div className="mx-3.5 mt-6">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" value={AreaSearch} onChange={handleAreaInput} placeholder="Search with Area" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="form-control">
            <input type="text" value={NameSearch} onChange={handleNameInput} placeholder="Search with Name" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;