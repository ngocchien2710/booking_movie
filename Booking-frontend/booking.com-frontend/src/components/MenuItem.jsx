import React from "react";

const MenuItem = ({ item }) => {
  if (item.children) {
    return (
      <li className="relative group">
        <a href={item.url} className="hover:bg-gray-200">
          {item.label}
        </a>
        <ul className="absolute hidden mt-2 space-y-2 bg-white rounded-md shadow-md group-hover:block">
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li>
        <a href={item.url}>{item.label}</a>
      </li>
    );
  }
};

export default MenuItem;
