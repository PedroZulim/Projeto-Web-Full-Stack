const jwt = require("jsonwebtoken");
const config = require('../../lib/configuracao');

var auth = {
	checkToken: async (request, response, next) => {
		try {
			//   get the token from the authorization header
			const token = await request.headers.authorization.split(" ")[1];

			//check if the token matches the supposed origin
			const decodedToken = await jwt.verify(token, config.jwtSecretKey);

			// retrieve the user details of the logged in user
			const user = await decodedToken;

			// pass the the user down to the endpoints here
			request.user = user;

			// pass down functionality to the endpoint
			next();

		} catch (error) {
			response.status(401).json({
				error: new Error("Invalid request!"),
			});
		}
	}
}
module.exports = auth;
