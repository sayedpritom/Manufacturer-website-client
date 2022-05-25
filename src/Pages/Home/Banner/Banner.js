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
                <p className="mb-6 leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit, dolore magni deleniti et sit repudiandae, obcaecati inventore minus maxime deserunt fugiat ipsa quam. Optio quisquam consectetur error obcaecati corporis!
                </p>
            </div>
        </div>
    </section>
);
};

export default Banner;