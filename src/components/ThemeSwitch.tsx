"use client";

import { Switch } from "@nextui-org/react";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useEffect } from "react";

function ThemeSwitcher() {
  const [theme, toggleTheme] = useDarkMode();

  return theme !== "init" ? (
    <Switch
      defaultSelected
      size="md"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        theme === "light" ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
      onChange={() => toggleTheme()}
    ></Switch>
  ) : (
    <div className="h-[1.75rem] w-[10px]" />
  );
}

export default ThemeSwitcher;
