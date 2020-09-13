const multer  = require('multer');
const Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./uploads/product/");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
})
const upload = multer({
    storage: Storage
}); 