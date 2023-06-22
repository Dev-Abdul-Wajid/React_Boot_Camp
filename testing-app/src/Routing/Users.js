import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className='mt-5'>
      <h3>User info</h3>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>email</th>
              <th>age</th>
              <th>nationality</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {/* <Link to={`/users/${user.id}`}> */}
                    {user.name}
                  {/* </Link> */}
                </td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className='btn btn-primary' onClick={() => navigate('/params')}>Go to query page</button> */}
    </div>
  );
};

export default Users;
