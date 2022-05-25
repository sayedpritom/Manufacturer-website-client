import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
// import { faTrophy } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {


    return (
        <section>
            <div className="py-20">
                <h1 className="text-4xl text-primary text-center font-bold py-0 uppercase leading-relaxed">We are one of the largest <br /> manufacturers in the world</h1>
                <h4 className="text-xl text-center font-bold leading-relaxed">We Believe In Manufacturing Durable Machines</h4>
            </div>
                <div class="divider"></div>
            <div class="grid grid-cols-4 justify-items-center text-center gap-5 mb-10">
                <div>
                    <div className="icon text-5xl text-primary font-bold">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h1 className="text-4xl font-bold my-5">12+</h1>
                    <p className="text-xl text-primary">Years of Experience</p>
                </div>
                <div>
                    <div className="icon text-5xl text-primary font-bold">
                        <FontAwesomeIcon icon={faEarthAmerica} />
                    </div>
                    <h1 className="text-4xl font-bold my-5">82+</h1>
                    <p className="text-xl text-primary">Countries Buy From Us</p>
                </div>
                <div>
                    <div className="icon text-5xl text-primary font-bold">
                        <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                    </div>
                    <h1 className="text-4xl font-bold my-5">10M+</h1>
                    <p className="text-xl text-primary">Total Revenue</p>
                </div>
                <div>
                    <div className="icon text-5xl text-primary font-bold">
                        <FontAwesomeIcon icon={faTrophy} />
                    </div>
                    <h1 className="text-4xl font-bold my-5">12</h1>
                    <p className="text-xl text-primary">Awards Won</p>
                </div>
            </div>
                <div class="divider"></div>
        </section>
    );
};

export default BusinessSummary;