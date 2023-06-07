import React, { useState, useEffect } from "react";

const Example4 = () => {
  const [data, setData] = useState(2);

  useEffect(() => {
    console.log("useEffect triggered");

    const updatedData = 2;
    setData(updatedData);
  }, [data]);

  console.log("Component rendered");

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Example4;
