import React from "react";
import MenuIcon from "./Icons/MenuIcon";

export default function MenuButton({
  setIsSidebarActive,
}: {
  setIsSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleMenuActive = () => {
    setIsSidebarActive((prev) => {
      return !prev;
    });
  };
  return (
    <button className="sm:hidden block" onClick={handleMenuActive}>
      <MenuIcon />
    </button>
  );
}
