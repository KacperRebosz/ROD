// import react from "react";
// import { useEffect, useState } from "react";

// const UseCheckMobileScreen({ children }) {
//   const [width, setWidth] = useState(window.innerWidth);
//   const handleWindowSizeChange = () => {
//     setWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleWindowSizeChange);
//     return () => {
//       window.removeEventListener("resize", handleWindowSizeChange);
//     };
//   }, []);

//   if (width >= 1024) {
//     return { children };
//   }
// }
