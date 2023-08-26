const multer = require('multer')
 const upload = multer({
    fileFilter: function (req, file , cb){
let mimetype = file.mimetype == "image/png" || 
               file.mimetype == "image/jpg" || 
               file.mimetype =='application/pdf' ||
               file.mimetype == "image/jpeg" 
        if(!mimetype){
            cb(null, false)
            console.log("only png & jpg & pdf file supported")
           }
           cb(null, true)
    },
      
})   

module.exports= {
upload
}
