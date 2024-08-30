export const sum = (a, b) => a + b

export const myFunction = (input) => {
	if(typeof input !== "number") {
		throw new Error("Invalid input")
	}
}

export const fetchData = (callback) => {
	setTimeout(() => {
		callback("peanut butter")
	}, 1000)
}