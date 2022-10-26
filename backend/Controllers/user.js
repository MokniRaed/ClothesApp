const userSchema = require("../Models/user");
const bcrypt = require("bcrypt")

exports.createUser = async (req, res) => {
  try {
    // Check if the email used to signUp is exist or not
    const { email, name, lastName, password } = req.body;
    const isExist = await userSchema.findOne({ email });
    console.log(isExist, "email...................... ");
    if (isExist) {
      return res.status(400).send("Email already used!");
    }
     //if email not exist the system will create the new user
     const newUser = new userSchema(req.body);
    //Hash password / creaptage de mot de passe
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password,salt)
    // set the new hashed password
    newUser.password = hash
    await newUser.save();
    res.status(200).send("user created");

  } catch (err) {
    res.status(500).send("cannot create user!");
    console.log(err);
  }
};

exports.login = async (req, res) => {

    try{
        const { email, password } = req.body;
        //Search by email if user is exist 
        const isUser = await userSchema.findOne({email})
        
          if (!isUser) {
            return res.status(400).send("user not found !");
          }
          // check the password of the user
          const match =await  bcrypt.compare(password,isUser.password);
          console.log(match,"matchde password status");
        
          if (!match) {
            return res.status(400).send("Wrong Password !");
          }
          res.status(200).send(isUser)
    }catch(err){
        console.log(err);
    }

};
