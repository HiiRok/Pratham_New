import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        onClick={handleClick}
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        color='white'
      >
        <path d="M12 2c-3.31 0-6 2.69-6 6a6 6 0 0 0 12 0c0-3.31-2.69-6-6-6zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>

      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem ><NavLink style={{ cursor: 'pointer', color: 'black',textDecoration :'None' }}  to={"/userProfile"}>Profile</NavLink></MenuItem>
        <MenuItem ><NavLink style={{ cursor: 'pointer', color: 'black',textDecoration :'None' }}  to={"/mycourses"}>My Courses</NavLink></MenuItem>
        <MenuItem ><NavLink style={{ cursor: 'pointer', color: 'black',textDecoration :'None' }} to={"/"}>Logout</NavLink></MenuItem>
      </Menu>
    </div>
  );
}
