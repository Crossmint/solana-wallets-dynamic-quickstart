"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export function LogoutButton() {
  const { handleLogOut } = useDynamicContext();

  return (
    <button
      className="w-full py-2 px-4 rounded-md text-sm font-medium border bg-gray-50 hover:bg-gray-100 transition-colors"
      onClick={() => {
        handleLogOut().then(() => {
          window.location.reload();
        });
      }}
    >
      Log out
    </button>
  );
}
