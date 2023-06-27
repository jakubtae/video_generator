import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
export default function authenticateToken(req, res, next) {
    const token = req.body.jwt || req.cookies.jwt;
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, admin) => {
      if (err) return res.sendStatus(403);
      req.admin = admin;
      if (req.params.uuid !== admin._id) {
        return res.send("How the hell are you here?");
      }
      req.admin.perms = Object.values(req.admin.perms);
      if (
        req.params.perm !== "undefined" &&
        req.admin.perms.includes(req.params.perm) == "false"
      ) {
        return res.send("Permission denied");
      }
      next();
    });
  }