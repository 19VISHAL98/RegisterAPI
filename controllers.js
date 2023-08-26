const AWS = require("aws-sdk")
const register = require("./models/register");
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION,
    secretAccessKey : process.env.AWS_SECRET_KEY,
    signatureVersion: "v4",
  });


   async function uploadImage(files){
    // req.files = files
       const s3 = new AWS.S3();
         const bucketName = process.env.AWS_S3_BUCKET_NAME;
         const Key = `${Date.now()}_${files[0].originalname.trim()}`;
         const params = { Bucket: bucketName, Key: Key, Body: files[0].buffer, ContentType: files[0].mimetype};
         const urlData = await s3.upload(params).promise()
         return urlData
}


const createUser = async(req, res) => {
    try{
        // let url = ''
        // if(req.files){
        //   let imageUrl =  uploadImage(req.files)
        //   url = imageUrl.Location
 
        // }

       const data = new register(req.body);
       await data.save();
       return res.status(200).send({msg : "Registration Completed",status:true})

    }catch(err){
        return res.status(400).send({Errer:err,status:false})
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