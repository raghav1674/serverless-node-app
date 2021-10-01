const bcrypt = require("bcryptjs");
const Query = require("../../database/query");


async function signUp(req){
    let { name, email, password, confirmPassword } = req;
    email = email.toLowerCase();
    if (password != confirmPassword) {
        return {
            success: false,
            error: "Confirm Password Does Not Match!!",
        };
    }
    password = await bcrypt.hash(password, 8);

    // Check if email already exist or not!!
    const matchQuery =
        `SELECT * from userAuth WHERE email='${email}'`;
    const emailAlreadyExist = await Query.get(matchQuery);

    if (!emailAlreadyExist.isFound) {
        const sqlQuery =
            `insert into userAuth (name,email,password)` +
            ` values ('${name}','${email}','${password}')`;
        const userData = await Query.post(sqlQuery);

        return {
            response: userData,
            message: "You are registered successfully!!",
            success: true
        };
    }
    else {
        return {
            success: false,
            error: "An account with this email already exist.",
        };
    }
}

module.exports = signUp;
