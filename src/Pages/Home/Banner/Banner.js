import React from 'react';
import backgroundImage from '../../../assets/images/Banner Image.jpg'
import './Banner.css';

const Banner = () => {
return (
    <section>
        <div className={`flex flex-col md:flex-row items-center justify-between banner my-20 lg:my-0 `}>
            <div className="flex-1 m-20 md:m-0 block mx-auto">
                <img className="px-20 md:p-0" src={backgroundImage} alt="" />
            </div>
            <div className="flex-1 m-12 ">
                <h3 className="text-primary text-2xl font-bold">Most popular Brushless Motors</h3>
                <h2 className="text-5xl font-bold my-5 leading-normal">We Make The Best Selling <br /> Products In This Industry</h2>
                <p className="mb-6 leading-relaxed text-gray-500">The main difference between brushless or brushed motors is that the brushed variants are made of carbon while the brushless units use magnets to generate power. For this reason, brushless motors are better adapted, generate no friction, produce less heating and provide better performance
                </p>
            </div>
        </div>
    </section>
);
};

export default Banner;