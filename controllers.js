
const register = require("./models/register");
const createUser = async(req, res) => {
    try{
        const data = new register(req.body);
       await data.save();
       return res.status(200).send({msg : "insert successfully"})

    }catch(err){
        return res.status(400).send({Errer:err})
    }
    
  };



  const getUser = async(req, res) => {
    try{
        let data = await register.find();
        return res.status(200).send({data : data})
    }catch(err){
        return res.status(400).send({Errer:err})
    }
  };

  module.exports= {
    createUser,
    getUser
  }