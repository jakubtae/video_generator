import express from "express";
const Urouter = express.Router();
import Stories from "../config/models/stories.js";
import authenticateToken from "../middleware/authenticateToken.js";

Urouter.get("/:uuid", authenticateToken, function (req, res) {
  if (req.admin.perms.length == 1)
    return res.redirect(req.params.uuid + "/" + req.admin.perms[0]);
  res.send(req.admin.perms);
});

Urouter.get("/:uuid/:perm", authenticateToken, async (req, res) => {
  const listOfStories = await Stories.find({ perm: req.params.perm }).select({
    title: 1,
    date: 1,
    published: 1,
  });
  res.send(listOfStories);
});

Urouter.post("/:uuid/:perm/new", authenticateToken, async (req, res) => {
  var now = new Date();
  const date = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
  const stories = await Stories.create({
    perm: req.params.perm,
    title: req.body.title,
    date: date,
  });
  if(!stories){ return res.send("Error creating stories")}
  const route = stories._id;
  res.redirect(`/user/${req.params.uuid}/${req.params.perm}/${route}`);
});

export default Urouter;
