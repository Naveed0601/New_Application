import React, { useEffect, useState } from "react";

const TestingPage = () => {
  const [message, setMessage] = useState("");

  const testingData = async () => {
    try {
      const response = await fetch("https://35.200.169.163:1002/api/Hii", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Data:", data);
      setMessage(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    testingData();
  }, []);

  return <div>{message?.message || "Loading..."}</div>;
};

export default TestingPage;
