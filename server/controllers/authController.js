const router = require("express").Router();
const cookieParser = require("cookie-parser");
const authService = require("../services/AuthService");

//TODO: FIX THE PATHS

  router.post("/login", async (req, res) => {
    const loginData = req.body;

      try {
        const token = await authService.login(loginData);
        
        res.cookie('AUTH', token, {
          httpOnly: true,
          secure: true,
        });

        res.status(200).json({ token });

    } catch (err) {
      
        res.status(401).json({ error: 'Authentication failed' });
    }
  });

  router.post("/register", async (req, res) => {
    const registerData = req.body;

    try {
      const token = await authService.register(registerData);
      
      res.cookie('AUTH', token, {
        httpOnly: true,
        secure: true,
      });

      res.status(200).json({ token });
      
    } catch (err) {
        res.status(409).json({ error: 'User already exists' });
    }
  });
  
  router.get("/logout", (req, res) => {
    res.clearCookie("AUTH");
    res.status(200).json({ message: 'Logout successful' });
  });
  
  module.exports = router;