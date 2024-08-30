export default {
	transform: {
		"^.+\\.[tj]sx?$": "babel-jest"
	},
	transformIgnorePatterns: ["/node_modules/"]
};