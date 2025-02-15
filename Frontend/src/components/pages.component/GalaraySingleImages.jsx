import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleImageQuery, useUpdateImageMutation } from '../../reduxApi/upoadApi';

export default function GallerySingleImages() {
    const { imageurl } = useParams();  // Get the image ID from URL params
    const { data: getimage, error: getImageError, isLoading: isLoadingImage } = useGetSingleImageQuery(imageurl);  // Pass imageurl to the query
    const [updateImage, { data, error, isLoading }] = useUpdateImageMutation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageId, setImage] = useState(imageurl);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedImage) {
            console.error("No image selected for update");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedImage); 
        
        console.log(formData.file);
        
        try {
            await updateImage({formData, imageId}).unwrap(); 
        } catch (err) {
            console.error("Error updating image:", err);
        }
    };

    return (
        <form className='max-w-6xl mx-auto p-4 mt-32 grid grid-cols-2 gap-2' onSubmit={handleSubmit}>
            <div>
                {getimage ? (
                    <img 
                        src={getimage?.image?.file}  
                        alt={getimage?.name || 'Image'} 
                        className="w-72 h-48 object-cover rounded-md" 
                    />
                ) : (
                    <p>Loading image...</p>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <input type='file' accept='image/*' onChange={handleFileChange} />
                <button type='submit' disabled={isLoading} className='bg-sky-600 hover:bg-sky-700 w-[50%] px-8 py-2 rounded-3xl text-white'>
                    Update
                </button>
            </div>
            {error && <p className="text-red-500">Error updating image</p>}
            {data && <p className="text-green-500">Image updated successfully!</p>}
            {getImageError && <p className="text-red-500">Error fetching image</p>}
        </form>
    );
}
