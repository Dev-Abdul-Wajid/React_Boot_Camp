import React from 'react';

let users = [
  {
    name:"Naruto",
    title:"Hokage"
  },
  {
    name:"Luffy",
    title:"King Of Pirates"
  },
  {
    name:"Lelouch",
    title:"Zero"
  }
]

function SecondComponent() {
  return (
    <div>
      {
        users.map((user) => {
          return (
            <div>
              <p style={{fontSize:'25px'}}>{ user.name} </p>
              <p style={{fontSize:'16px'}}>{user.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SecondComponent;
