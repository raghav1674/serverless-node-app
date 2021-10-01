const mySql = require("./connection")


const handleError = (error) => {
    return {
      statusCode: 400,
      message: "Something went wrong!! Please try again.",
      data: error,
    };
  };
  
  class Query {
    async post(query) {
      return await new Promise((resolve, reject) => {
        mySql.query(query, async (err, data) => {
          if (err) {
            reject(handleError(err));
          } else {
            resolve({
              statusCode: 201,
              message: "Data saved successfully!",
              data,
              isRegistered: true,
            });
          }
        });
      });
    }
  
  
    async get(query) {
      return await new Promise((resolve, reject) => {
        mySql.query(query, async (err, data) => {
          if (err) {
            reject(handleError(err));
          } else {
            resolve({
              statusCode: 201,
              message: "Record found successfully.",
              data,
              isFound: data.length,
            });
          }
        });
      });
    }
  
}

module.exports = new Query();
