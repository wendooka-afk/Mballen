
import React from 'react';

interface GalleryProps {
    images: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {images.map((img, index) => (
                <div
                    key={index}
                    className="relative group overflow-hidden rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-500"
                >
                    <img
                        src={img}
                        alt={`Activity image ${index + 1}`}
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            ))}
        </div>
    );
};
