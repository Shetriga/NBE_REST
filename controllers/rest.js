const request = require("request");

exports.getAllEmployees = async (req, res, next) => {
  try {
    request.get(
      "https://dummy.restapiexample.com/api/v1/employees",
      (err, response, body) => {
        if (!err && response.statusCode === 200) {
          return res.status(200).json({
            employees: JSON.parse(body).data,
          });
        }
      }
    );
  } catch (e) {
    const error = new Error(e.message);
    e.statusCode = 500;
    return next(error);
  }
};

exports.getSpecificEmployee = async (req, res, next) => {
  const empId = req.params.eid;

  try {
    request.get(
      `https://dummy.restapiexample.com/api/v1/employee/${empId}`,
      (err, response, body) => {
        if (!err && response.statusCode === 200) {
          return res.status(200).json({
            emp_data: JSON.parse(body).data,
          });
        }
      }
    );
  } catch (e) {
    const error = new Error(e.message);
    e.statusCode = 500;
    return next(error);
  }
};
