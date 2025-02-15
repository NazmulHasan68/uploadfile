import React from 'react'
import { useGetImageQuery } from '../../reduxApi/upoadApi';
import { Link } from 'react-router-dom';

export default function GalaryImage() {
    const { data, error, isLoading } = useGetImageQuery();

  return (
    <div className='h-72 w-full grid grid-cols-3 mt-16 gap-4 bg-slate-700 p-4'>
      {data?.images?.length > 0 ? (
        data.images.map((img, index) => (
            <Link to={img._id} key={index} className="flex justify-center cursor-pointer items-center h-32 overflow-auto">
              <img src={img.file} alt={img.name} className="w-full h-full object-cover rounded-md" />
            </Link>
        ))
      ) : (
        <p>No images found.</p>
      )}
    </div>
  )
}
