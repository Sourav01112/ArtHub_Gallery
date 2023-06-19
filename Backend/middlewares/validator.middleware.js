const passwordValidater = (req, res, next) => {
  const { password } = req.body;
  // Password length should be between 8 and 20 characters
  if (password.length < 8 || password.length > 20) {
    res.status(400).json({ msg: "PASSWORD length must be 8 character" });
  }

  // Password should contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return res
      .status(400)
      .json({ error: "Password should contain at least one lowercase letter" });
  }

  // Password should contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return res
      .status(400)
      .json({ error: "Password should contain at least one uppercase letter" });
  }

  // Password should contain at least one digit
  if (!/\d/.test(password)) {
    return res
      .status(400)
      .json({ error: "Password should contain at least one digit" });
  }

  // Password should contain at least one special character
  if (!/[!@#$%^&*]/.test(password)) {
    return res.status(400).json({
      error:
        "Password should contain at least one special character (!@#$%^&*)",
    });
  }

  // If password passes all validation rules, proceed to the next middleware or route handler
  next();
};

module.exports = { passwordValidater };
