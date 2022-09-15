import React from 'react';
import manufacturers from '../../assets/images/maufacturer.png';

const MechanicalNeed = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex-1">
                        <img className="w-4/6 rounded-xl" src={manufacturers} />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold leading-relaxed">Let Us Take Care Of Your Mechanical Needs</h1>
                        <p className="py-6">Our vision is to produce parts that are efficient in term of energy and also durable for long term usage. We are continuously improving our technology to that we can meet our goals and server our customers the best.</p>
                        <button className="btn btn-primary">Learn More About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MechanicalNeed;