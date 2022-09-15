import React from 'react';

const Blogs = () => {
    return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-10 py-20 bg-white ">
            <div class="card bg-white shadow-xl">
                <div class="card-body">
                    <h3 className="text-3xl text-primary font-medium">How will you improve the performance of a React Application?</h3>
                    <hr className="my-5" />
                    <p>For optimizing react application performance, all components should receive only the necessary props. Thus CPU consumption will be controlled and also unnecessary features will not be over rendered. Functional components can be helpful in this case. A functional component will collect all props and redistribute them to other components. Some other techniques are 1. Using React.Fragment to avoid adding extra nodes to the DOM, 2. Use Production Build for production before deploying, 3. Use React.Suspense and React.Lazy for Lazy Loading Components. The idea of lazy loading is to load a component only when it is needed. 4. use React.memo for component Memoization. It helps cache functional components. 5. Virtualize a Large Lists Using react-window. React-window renders only the items in a large list that are currently visible, thus it becomes efficient when showing lists of any size.</p>
                </div>
            </div>
            <div class="card bg-white shadow-xl">
                <div class="card-body">
                    <h3 className="text-3xl text-primary font-medium">What are the different ways to manage a state in a React application</h3>
                    <hr className="my-5" />
                    <p>In modern React, most applications are built with functional components. This gives a modular architecture. So code is easier to understand, reuse and maintain this way. A state is an object that holds information. State stores information about the component and also controls its behavior. There are four types of states:
                        <br />

                        (A) Local state. This is data we manage in one or another component. Most commonly managed with useState hook.
                        <br />

                        (B) Global state. This is data that we manage across
                        multiple components. A common example is "authenticated user state"
                        <br />

                        (C) Server state. When certain data comes from an external server that must be integrated with our UI state is called server state.
                        <br />

                        (D) URL state. Data that exists on our URLs. This includes the pathname, and query parameters. </p>

                </div>
            </div>
            <div class="cardbg-white shadow-xl">
                <div class="card-body">
                    <h3 className="text-3xl text-primary font-medium">What is a unit test? Why it's necessary?</h3>
                    <hr className="my-5" />
                    <p>
                        Unit testing is a process of software development in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
                        Unit testing is necessary because it allows programmers to refactor code at a later date, and make sure the module still works correctly. Unit testing changes the nature of the debugging process. </p>
                </div>
            </div>
            <div class="card bg-white shadow-xl">
                <div class="card-body">
                    <h3 className="text-3xl text-primary font-medium">How does prototypical inheritance work?</h3>
                    <hr className="my-5" />
                    <p>
                        Prototypical inheritance is a feature in javascript used to add methods and properties in objects. By this method an object can inherit the properties and methods of another object. </p>
                </div>
            </div>
            <div class="card bg-white shadow-xl">
                <div class="card-body">
                    <h3 className="text-3xl text-primary font-medium">Why we do not set the state directly in React? </h3>
                    <hr className="my-5" />
                    <p>
                        Because setting the state directly in react does not change the this.state immediately. Also, calling the setState() may just replace the update that was set directly before. Thus it can lead to odd bugs which can be tricky to track down. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;