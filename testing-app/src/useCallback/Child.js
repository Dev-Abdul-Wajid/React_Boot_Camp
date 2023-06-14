const Child = ({ onIncrement }) => {
	console.log("child")
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
};

export default Child