import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    // ${process.env.JWT_SERCRET},
    ` ${process.env.JWT_SECRET_KEY}` || "somethongsecret",
    {
      expiresIn: "30d",
    }
  );
};
