import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import bg from '../../assets/images/qualificationbg.png'
const QualificationsAndEnquiry = () => {
    const style = {
        borderTop: '2px solid white',
        borderBottom: '2px solid white',
        backgroundImage: `url('${bg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
        margin: '200px auto'

    }
    return (
        <div style={style}>
            <div className="qualifications grid grid-cols-1 md:grid-cols-3 gap-5 mt-[-100px] max-w-7xl mx-auto px-10">
                <div class="card mx-auto w-5/6 md:w-full bg-primary text-primary-content">
                    <div class="card-body py-10">
                        <p className="text-7xl text-left"><FontAwesomeIcon icon={faCircleCheck} /></p>
                        <h2 class="text-3xl font-medium my-4">Quality</h2>
                        <p class="text-xl font-medium">All Products Are Quality Tested</p>
                    </div>
                </div>
                <div class="card mx-auto w-5/6 md:w-full bg-primary text-primary-content">
                    <div class="card-body py-10">
                        <p className="text-7xl text-left"><FontAwesomeIcon icon={faFileCircleCheck} /></p>
                        <h2 class="text-3xl font-medium my-4">Certificates</h2>
                        <p class="text-xl font-medium">We Are Certified</p>
                    </div>
                </div>
                <div class="card mx-auto w-5/6 md:w-full bg-primary text-primary-content">
                    <div class="card-body py-10">
                        <p className="text-7xl text-left"><FontAwesomeIcon icon={faGears} /></p>
                        <h2 class="text-3xl font-medium my-4">Infrastructure</h2>
                        <p class="text-xl font-medium">Strong Infrastructure</p>
                    </div>
                </div>
            </div>
            <h1 className="text-6xl text-white text-center font-medium pt-20 pb-10">Our Professionalism Has Been <br/> Set to a Benchmark</h1>
            <div class="max-w-7xl w-5/6 xl:w-full mx-auto glass text-left shadow-lg my-20 flex flex-col md:flex-row items-center justify-between p-10 rounded-lg">
                <div className=" flex-1">
                    <h2 class="card-title text-4xl text-white font-bold my-5">Have Any Question About Us <br /> Or Get A Product Request? </h2>
                    <p className="text-xl text-white">Click the button to listen on Spotiwhy app.</p>
                </div>
                <div class="my-4 flex-1 flex justify-end">
                    <button class="btn btn-primary m-5">Contact Us</button> <br />
                    <button class="btn btn-secondary m-5">Request For Quote</button>
                </div>
            </div>
        </div>
    );
};

export default QualificationsAndEnquiry;