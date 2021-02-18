import React from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./Components/Header/Header";
import Form from "./Pages/Form";

function App() {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <>
      {isTablet && (
        <>
          <p>Hi Tablet</p>
          <Form />
        </>
      )}
      {isMobile && (
        <>
          <Header />
          <Form />
        </>
      )}
    </>
  );
}

export default App;
