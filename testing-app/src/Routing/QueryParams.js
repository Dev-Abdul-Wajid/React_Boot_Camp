import React from 'react';
import { useLocation } from "react-router-dom";

const QueryParams = () => {
  const location = useLocation();
  console.log(location.search)

  const query_params = new URLSearchParams(location.search);
  console.log({page: query_params.get("page"), search: query_params.get("sort")})

  return (
    <div className='mt-5'>
      <h3>Query params page</h3>
    </div>
  );
};

export default QueryParams;
