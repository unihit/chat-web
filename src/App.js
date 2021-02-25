import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useMediaQuery } from "react-responsive";
import Header from "./Components/Header/Header";
// import MessageList from "./MessageList";
import Form from "./Pages/Form";

function App() {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const [cookies, setCookie] = useCookies([]);

  useEffect(() => {
    fetch("http://192.168.100.120:3000/")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setCookie("customer", res.token);
      });
  }, []);

  return (
    <>
      {isTablet && (
        <>
          <Header />
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
