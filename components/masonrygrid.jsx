"use client";
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/base/Button';


const MasonryGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch('/api/getImages');
            const data = await res.json();
            setImages(data);
            setLoading(false);
            console.log(data);
        };

        fetchImages();
    }, []);

    if (loading) {
        return <p>Loading images...</p>;
    }

    return (
        <>
            <div className="column-1 sm:columns-2 lg:columns-3 md:py-20 gap-12 p-12">
                {images.map((img) => (
                    <div
                        key={img.key}
                        className="mb-4 break-inside-avoid cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-black/20 p-1 rounded-lg"
                        onClick={() => handleOpen(img)}
                    >
                        <img src={img.url} alt={img.alt} className="w-full h-auto rounded-lg" />
                    </div>
                ))}
            </div>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    {selectedImage && (
                        <div className="relative flex items-center justify-center">
                            <Button className="absolute top-4 right-4 bg-black rounded-full px-4 py-2 text-white text-sm" onClick={handleClose}>
                                X                            
                            </Button>
                            <img 
                                src={selectedImage.url} 
                                alt={selectedImage.alt} 
                                className="max-h-[90vh] object-contain rounded-lg"
                            />
                        </div>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default MasonryGrid;
