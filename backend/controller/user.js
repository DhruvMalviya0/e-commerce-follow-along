const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../model/user.js");
const router = express.Router();
const { upload } = require("../middleware/multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// create user
router.post("/create-user",upload.single("file"),catchAsyncErrors(async (req, res, next) => {
    console.log("create user");
    const { name, email, password } = req.body;

    const userEmail = await User.findOne({ email });
    if (userEmail) {
      if (req.file) {
        const filepath = path.join(__dirname, "../uploads", req.file.filename);
        try {
          fs.unlikeSync(filepath);
        } catch (err) {
          console.log("Error removing file:", err);
          return res.status(500).json({ message: "Error removing file" });
        }
      }

      return next(new ErrorHandler("User already exists", 400));
    }
    let fileurl = "";

    if (req.file) {
      fileurl = path.join("uploads", req.file.filename);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("At Create ", "Password:", password, "Hash: ", hashedPassword);

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: req.file?.filename || "",
        url: fileurl,
      },
    });
    console.log(user);
    res.status(201).json({ success: true, user });
  })
);

router.post("/login-user", catchAsyncErrors(async (req, res, next) => {
  console.log("Logging in user...")

  let { email, password } = req.body;
  email = email;
  password = password;

  if (!email || !password) {
    return next(new ErrorHandler("Please provide me both email and password."))
  }

  const user_authen = await User.findOne({ email }).select("+password")
  if (!user_authen) {
    console.log("No user with this  email")
    return next(new ErrorHandler("no email found.make account first"))
  }

  const isPasswordMatched = await bcrypt.compare(password, user_authen.password)
  console.log("password matched result: ", isPasswordMatched)
  console.log("at auth - password, ", password, "hash: ", user_authen.password)

  if (!isPasswordMatched) {
    console.log("password dosen't match")
    return next(new ErrorHandler("password fail", 401))
  }
  res.status(200).json({
    success: true,
    message: "succesfull",
    user: {
      id: user_authen.id,
      name: user_authen.name,
      email: user_authen.email,
    },
  })


}))

module.exports = router;
