import FakeData from "@/Shared/FakeData";
import React, { useState, useRef, useEffect } from "react";
import CarItem from "./CarItem";

function MostSearchedCar() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  useEffect(() => {
    const scrollContainer = carouselRef.current;
    let scrollAmount = 0;
    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };
    const interval = setInterval(scrollStep, 25);
    return () => clearInterval(interval);
  }, []);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-16">Most Searched Car</h2>
      <div className="relative overflow-hidden">
        <div ref={carouselRef} className="flex flex-nowrap cursor-pointer overflow-hidden mx-24" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
          {FakeData.carList.map((car, index) => (
            <div key={index} className="flex-none basis-1/4">
              <CarItem car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MostSearchedCar;
