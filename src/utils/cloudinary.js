import { v2 as cloudinary} from "cloudinary";
import fs from "fs";
import { console } from "inspector";

(async function() {

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

})();

const uploadOnCloudinary = async (filePath) => {
      try {
        if(!filePath) return null;
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
        })
        console.log("file is uploaded on cloudinary", response);
        return response;
      } 
      catch (error) {
        fs.unlinkSync(filePath);
        console.log("Error while uploading on cloudinary", error);
        
      }
}
   


export { uploadOnCloudinary };