import React, { useState, useCallback, useMemo } from "react";
import List from './List'


const Example9 = () => {
	const [number, setNumber] = useState(1)
	const [dark, setDark] =useState(false)

	const getItems = () => {
		return [number, number + 1, number + 2]
	}

	// console.log(getItems())

	const theme = {
		backgroundColor: dark ? '#333' : '#FFF',
		color: dark ? '#FFF' : '#333'
	}

	return (
		<div style={theme}>
			<input
				type="number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark(prevDark => !prevDark)}>
				Toggle theme
			</button>
			<List getItems={getItems} />
		</div>
	)
}

export default Example9;

