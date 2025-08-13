

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  name: string;
  image: string;
  verifiedSeller?: boolean;
  fixed?: boolean;
  price: number;
  description?: string;
  images?: string[];
};

interface MobileDescriptionProps {
  product: Product;
  showPopUp: boolean;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileDescription = ({ product, setShowPopUp }: MobileDescriptionProps) => {
//   const images = product.images?.length ? product.images : [product.image];
  const images = [
  product?.images?.[0] || product.image,
  product?.images?.[0] || product.image,
  product?.images?.[0] || product.image,
  product?.images?.[0] || product.image,
  product?.images?.[0] || product.image,
];

  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenCarousel = useCallback(() => {
    setShowCarousel(true);
  }, []);

  const handleCloseCarousel = useCallback(() => {
    setShowCarousel(false);
    setCurrentIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <main>
      {/* Regular Mobile View */}
      {!showCarousel && (
        <div className="relative md:hidden">
          <div className="cursor-pointer relative z-10" onClick={handleOpenCarousel}>
            <Image
              src={images[0]}
              width={1000}
              height={1000}
              alt={product.name}
              priority
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Price Box */}
          <div className="relative z-20 -mt-10 p-3">
            <div className="flex flex-col gap-[30px] shadow-md p-3 rounded-xl bg-categoryBg h-fit">
              <div className="flex w-fit flex-col gap-[6px]">
                <h4 className="text-primary text-[33px] font-[700]">
                  ₦{product.price.toLocaleString()}
                </h4>
                {!product.fixed && (
                  <button className="text-primary py-[7px] px-[7px] w-fit rounded bg-neatBg">Negotiable</button>
                )}
              </div>
              <button onClick={(()=>{
                setShowPopUp(true)
              })} className="py-[12px] text-[17px] rounded-[8px] font-500 w-full bg-primary text-white">
                Request video call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Overlay */}
      {showCarousel && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          {/* Close Button */}
          <button
            onClick={handleCloseCarousel}
            className="absolute top-4 right-4 text-white z-50"
          >
            <X size={28} />
          </button>

          {/* Image Navigation */}
          <div className="flex flex-1 items-center justify-center relative">
            <button
              onClick={prevImage}
              className="absolute left-4 text-white z-50"
            >
              <ChevronLeft size={32} />
            </button>

            <Image
              src={images[currentIndex]}
              width={1000}
              height={1000}
              alt={`${product.name} ${currentIndex + 1}`}
              className="object-contain max-h-full"
            />

            <button
              onClick={nextImage}
              className="absolute right-4 text-white z-50"
            >
              <ChevronRight size={32} />
            </button>

            {/* Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MobileDescription;

