import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { useRouter } from 'next/router'
const Navbar = () => {
  // Router
  const router = useRouter()

  // hooks
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(true)
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setEnabled(!enabled);
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const handleReturn = (e) => {
    e.preventDefault()
    router.replace('/')
  };



  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <button
       onClick={handleReturn}
        className="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
      >
        Go Back
      </button>
              
              </div>
            </div>
            <div className="-mr-2 flex">
              <Switch
                checked={enabled}
                onChange={switchTheme}
                className={classNames(
                  enabled ? "bg-gray-600" : "bg-gray-200",
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                )}
              >
                
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </nav>


     
    </div>
  );
};

export default Navbar;
