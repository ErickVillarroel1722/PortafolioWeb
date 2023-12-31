const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
});



module.exports.uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, { folder: 'portafolio' });
        return result;  // Devuelve el resultado si la carga es exitosa
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error.message);
        throw error;  // Lanza el error para que pueda ser manejado en el código que llama a esta función
    }
};
module.exports.deleteImage = async (publicId)=>{
    
    return await cloudinary.uploader.destroy(publicId)
}
