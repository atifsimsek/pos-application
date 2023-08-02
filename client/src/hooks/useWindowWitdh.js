import { useState, useEffect } from "react";

function useWindowWidth() {
  const [windowWidth, setwindowWidth] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setwindowWidth({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    // Temizlik fonksiyonu
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
