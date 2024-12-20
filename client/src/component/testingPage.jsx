import React, { useEffect, useState } from "react";

const TestingPage = () => {
  const [message, setMessage] = useState("");

  const testingData = async () => {
    try {
      const response = await fetch("https://back-end.xyz:1002/api/Hii", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data); // store the full response
    } catch (error) {
      console.error("Error fetching data", error);
      setMessage({ message: "Error fetching data" }); // Display error message if request fails
    }
  };

  useEffect(() => {
    testingData();
  }, []);

  return <div>{message?.message || "Loading..."}</div>;
};

export default TestingPage;
