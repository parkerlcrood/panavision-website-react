import { useState } from "react";
import { 
    uploadMerchImages, 
    deleteMerchImage,
    updateImageOrder,
    getMerchImages
} from "../services/api";


function MerchImageManager({ merchId, images, setImages }) {

    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);


    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };


    const handleUpload = async () => {

        if(files.length === 0) return;

        try {

            setUploading(true);
            const formData = new FormData();
            files.forEach(file => {
                formData.append("files", file);
            });

            await uploadMerchImages(
                merchId,
                formData
            );

            const updatedImages = await getMerchImages(merchId);
            setImages(updatedImages);
            setFiles([]);

        } catch(err) {
            console.error(
                "Image upload failed:",
                err
            );
        } finally {
            setUploading(false);
        }
    };


    const handleDelete = async (imageId) => {

        try {
            await deleteMerchImage(merchId, imageId);

            setImages(prev =>
                prev.filter(image => image.id !== imageId)
            );

        } catch(err) {
            console.error("Delete failed:", err);
        }
    };


    const moveImage = async (index, direction) => {

        const newImages = [...images];
        const newIndex = index + direction;

        if(
            newIndex < 0 ||
            newIndex >= newImages.length
        ) {
            return;
        }

        [
            newImages[index],
            newImages[newIndex]
        ] = [
            newImages[newIndex],
            newImages[index]
        ];

        setImages(newImages);

        try {
            await updateImageOrder(
                merchId,
                newImages.map(image => image.id)
            );
        } catch(err) {

            console.error(
                "Order update failed:",
                err
            );

            // revert if failed
            const refreshed = await getMerchImages(merchId);
            setImages(refreshed);

        }

    };


    return (
        <div className="image-manager">

            <p>Images</p>


            <div className="image-list">

                {images.map((image, index) => (

                    <div 
                        key={image.id}
                        className="admin-image"
                    >

                        <img
                            src={image.image_url}
                            className="itemImage"
                        />


                        <div>

                            <button
                                type="button"
                                onClick={() => moveImage(index, -1)}
                                disabled={index === 0}
                            >
                                ↑
                            </button>


                            <button
                                type="button"
                                onClick={() => moveImage(index, 1)}
                                disabled={index === images.length - 1}
                            >
                                ↓
                            </button>


                            <button
                                type="button"
                                onClick={() => handleDelete(image.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>


            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
            />


            <button
                type="button"
                onClick={handleUpload}
                disabled={uploading}
            >
                {uploading 
                    ? "Uploading..." 
                    : "Upload Images"
                }
            </button>


        </div>
    );
}


export default MerchImageManager;