import { useEffect, useState } from "react";

const useStatusOnline = () => {
  const [statusOnline, setStatusOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatusOnline(false);
    });
    window.addEventListener("online", () => {
      setStatusOnline(true);
    });
  }, []);
  return statusOnline;
};

export default useStatusOnline;
