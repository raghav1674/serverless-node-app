const signUp = require("./modules/auth/controllers");

exports.signUpLambda = async (event)=>{

    const response = await signUp(event);
    return response;

};
