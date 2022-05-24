import React from 'react';
import backgroundImage from '../../assets/images/Banner Image.jpg'

const Banner = () => {
    const height = {
        height: 'calc(100vh - 70px)',
    }
    return (
        <section>
            <div className={`flex flex-col md:flex-row items-center justify-between banner `} style={height}>
                <div className="flex-1 m-20 md:m-0 block mx-auto">
                        <img className="px-20 md:p-0" src={backgroundImage} alt="" />
                </div>
                <div className="flex-1 m-12 ">
                    <h3 className="text-primary text-xl">Make Appointment</h3>
                    <h2 className="text-3xl font-bold my-6">Make An Appointment Today</h2>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit, dolore magni deleniti et sit repudiandae, obcaecati inventore minus maxime deserunt fugiat ipsa quam. Optio quisquam consectetur error obcaecati corporis!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;