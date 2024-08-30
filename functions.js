export const sum = (a, b) => a + b

const myFunction = (input) => {
	if(typeof input !== "number") {
		throw new Error("Invalid input")
	}
}