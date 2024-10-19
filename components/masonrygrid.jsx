"use client"
import { useState } from 'react';
import Modal from './Modal';

let photos = [
    { id: 1, alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
    { id: 2, alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
    { id: 3, alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' },
    { id: 4, alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
    { id: 5, alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
    { id: 6, alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' },
    { id: 7, alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
    { id: 8, alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
    { id: 9, alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' },
    { id: 10, alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' },
    { id: 11, alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg' },
    { id: 12, alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' }
];

const MasonryGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className="column-1 sm:columns-2 lg:columns-3 md:py-20 gap-12 p-12">
                {photos.map((img) => (
                    <div
                        key={img.id}
                        className="mb-4 break-inside-avoid cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-black/20 p-1 rounded-lg"
                        onClick={() => handleImageClick(img)}
                    >
                        <img src={img.src} alt={img.alt} className="w-full h-auto rounded-lg" />
                    </div>
                ))}
            </div>
            {selectedImage && <Modal image={selectedImage} onClose={handleCloseModal} />}
        </>
    );
};

export default MasonryGrid;