import { useEffect } from "react";

export function useKey(key, callback) {
  useEffect(
    function () {
      function handleEvent(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          callback();
        }
      }

      document.addEventListener("keydown", handleEvent);

      return () => document.removeEventListener("keydown", handleEvent);
    },
    [key, callback]
  );
}
