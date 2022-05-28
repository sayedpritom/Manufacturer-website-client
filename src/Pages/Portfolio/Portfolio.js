import React from 'react';

const Portfolio = () => {
    return (
        <div class="card max-w-7xl mx-auto px-10 card-side bg-base-100 my-10 shadow-xl">
            <div class="card-body">
                <h3 className="text-3xl text-primary font-medium">Sayed Pritom</h3>
                <h3 className="text-xl font-medium">sayedpritom999@gmail.com</h3>
                <hr className="my-5" />
                <p className="text-md ">Hello there. I'm a junior Javascript developer. Currently I'm also a student of English Honours. <br /> Here are 3 of my last practice projects:</p>
                <hr className="my-5" />
                <ul className="text-primary font-medium underline">
                    <li><a href="https://warehouse-eebb3.web.app/">Warehouse Management Website</a></li>
                    <li><a href="https://gmb-akash.web.app/">Photographer Portfolio Website</a></li>
                    <li><a href="https://earnest-chebakia-16168d.netlify.app/">Simple Add to Cart and Random Item Selection React Website</a></li>
                </ul>
                <hr className="my-5" />
                <p className="text-xl ">My skills are:</p>
                <ul className="text-md font-medium">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap/Tailwind CSS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;