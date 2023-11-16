'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: "Welcome to CG Home page",
  };
 
};
