import React, { useEffect } from 'react'
import { useGetImageQuery } from '../../reduxApi/upoadApi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePhotoSection() {
  const { data, error, isLoading } = useGetImageQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <p>Loading images...</p>;
  if (error) return <p className="text-red-500">Failed to load images!</p>;

  return (
    <div className='h-72 bg-orange-400'>
      {data?.images?.length > 0 ? (
        <Slider {...settings}>
          {data.images.map((img, index) => (
            <div key={index} className="flex justify-center items-center w-[450px] h-72 overflow-auto">
              <img src={img.file} alt={img.name} className="w-full h-full object-cover rounded-md" />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
}
