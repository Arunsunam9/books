// import { v2 as cloudinary } from "cloudinary";
// import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// type UploadResponse =
//   | { success: true; result?: UploadApiResponse }
//   | { success: false; error: UploadApiErrorResponse };

// const uploadToCloudinary = (
//   fileUri: string,
//   fileName: string
// ): Promise<UploadResponse> => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload(fileUri, {
//         invalidate: true,
//         resource_type: "auto",
//         filename_override: fileName,
//         folder: "product-images", // any sub-folder name in your cloud
//         use_filename: true,
//       })
//       .then((result) => {
//         resolve({ success: true, result });
//       })
//       .catch((error) => {
//         reject({ success: false, error });
//       });
//   });
// };

// export { uploadToCloudinary };




import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY, // Your Cloudinary API key
  api_secret: process.env.CLOUDINARY_API_SECRET, // Your Cloudinary API secret
});

/**
 * Uploads an image file to Cloudinary.
 * @param file - The image file to upload.
 * @returns The response from Cloudinary including the URL.
 */
export async function uploadToCloudinary(file: File) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Return a promise that resolves when the upload is complete
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "books", // Optional: specify a folder in your Cloudinary account
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result); // Resolving with the result when upload is successful
            }
          }
        )
        .end(buffer);
    });

    return result; // Result includes secure_url, public_id, etc.
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw new Error("Image upload failed");
  }
}