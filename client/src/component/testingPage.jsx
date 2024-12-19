import React, { useEffect, useState } from "react";

const TestingPage = () => {
  const [message, setMessage] = useState("");

  const testingData = async () => {
    try {
      const response = await fetch("https://35.200.169.163:1002/api/Hii");
      console.log(response);
      const data = await response.json();
      console.log(data);
      setMessage(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    testingData();
  }, []);

  return <div>{message.message}</div>;
};

export default TestingPage;
