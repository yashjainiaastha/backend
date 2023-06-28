const RateLimiter = require('ratelimiter');
const generateKey = (req) => {
    // Generate a unique key based on the user's authentication token or session ID
    return req.headers.authorization || req.sessionID;
  };
  
  const ratelimiter_auth= async (req, res, next) => {
    try {
      const key = generateKey(req);
  
      let rateLimitData = RateLimiter[key];
      if (!rateLimitData) {
        rateLimitData = {
          totalPoints: 10, 
          remainingPoints: 10,
          resetTime: Date.now() + 60000,
        };
        RateLimiter[key] = rateLimitData;
      }
  
      if (rateLimitData.remainingPoints < 0) {
        const timeRemaining = Math.ceil((rateLimitData.resetTime - Date.now()) / 1000);
  
        return res.status(429).json({
          error: 'Too many requests. Please try again after ' + timeRemaining + ' seconds.',
        });
      }
  
      rateLimitData.remainingPoints--;
      rateLimitData.resetTime = Date.now() + 60000;
  
      
      next();
    } catch (error) {
      console.error('Rate limiter error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  module.exports = ratelimiter_auth;