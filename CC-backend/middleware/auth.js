// middleware/auth.js
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from header
    if (!token) {
        return res.status(403).json({ message: "A token is required for authentication" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Save the decoded user info to request
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
    return next(); // Call the next middleware or route handler
};

module.exports = verifyToken;
