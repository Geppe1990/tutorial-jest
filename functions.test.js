import { sum, myFunction, fetchData } from "./functions";

test("adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3)
})

test("two plus two is four", () => {
	expect(2 + 2).toBe(4)
})

test("object assignment", () => {
	const data = { one: 1 }
	data["two"] = 2;

	expect(data).toEqual({ one: 1, two: 2 })
})

test("null is falsy", () => {
	const data = null
	
	expect(data).toBeFalsy()
})

test("one is truthy", () => {
	const data = 1

	expect(data).toBeTruthy()
})

test("throws on invalid input", () => {
	expect(
		() => myFunction("123")
	).toThrow()
})

test("the data is peanut butter", done => {
	function callback(data) {
		try {
			expect(data).toBe("peanut butter")
			done();
		} catch (error) {
			done(error);
		}
	}

	fetchData(callback);
})