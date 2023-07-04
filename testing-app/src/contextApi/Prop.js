import React from 'react';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const Child = ({ name }) => {
  return <div><Greeting name={name} /></div>;
};

const Parent = ({ name }) => {
  return (
    <div>
      <h2>Welcome to the Parent component</h2>
      <Child name={name} />
    </div>
  );
};

const Prop = () => {
  const name = 'John';

  return (
    <Parent name={name} />
  );
};

// const Greeting = ({ name, age }) => {
//   return <h1>Hello, {name}! Your age is {age}</h1>;
// };

// const Child = ({ component }) => {
//   return <div>{component}</div>;
// };

// const Parent = ({ greetingComponent }) => {
//   return (
//     <div>
//       <h2>Welcome to the Parent component</h2>
//       <Child component={greetingComponent} />
//     </div>
//   );
// };

// const Prop = () => {
//   const greetingComponent = <Greeting name="John" age="20"/>;

//   return <Parent greetingComponent={greetingComponent} />;
// };

export default Prop;


//Encapsulation, composition, decoupling
//improve code maintainability and scalability
