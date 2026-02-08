const checkAllowedFields = (data = []) => {
  return (req, res, next) => {
    try {
      if (!req.body) {
        return res.status(400).json({ message: "Your Body in null" });
      }

      const keys = Object.keys(req.body);

      const extraFields = keys.filter((key) => !data.includes(key));

      if (extraFields.length > 0) {
        return res
          .status(400)
          .json({
            message: `Extra fields are not allowed: ${extraFields.join(", ")}`,
          });
      }

      next();
    } catch (err) {
      console.log("Error in checking allowed fields", err);
      res.status(400).json({ message: "Error in checking allowed fields" });
    }
  };
};

module.exports = { checkAllowedFields };
