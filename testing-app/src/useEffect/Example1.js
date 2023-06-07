import { useEffect, useState } from "react";

const Example1 = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  // console.log('Outside useEffect')

  useEffect(()=>{
    console.log('useEffect');

    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))

    return () => {
      console.log("clean up code");
    }

  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item)=>{
        return <p key={item.id}>{JSON.stringify(item)}</p>
      })}
    </>
  );
}

export default Example1;