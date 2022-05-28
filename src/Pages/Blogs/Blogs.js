import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="card w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <h3 className="text-3xl text-primary">How will you improve the performance of a React Application?</h3>
                    <p>For optimizing react application performance, all components should receive only the necessary props. Thus CPU consumption will be controlled and also unnecessary features will not be over rendered. Functional components can be helpful in this case. A functional component will collect all props and redistribute them to other components. Some other techniques are 1. Using React.Fragment to avoid adding extra nodes to the DOM, 2. Use Production Build for production before deploying, 3. Use React.Suspense and React.Lazy for Lazy Loading Components. The idea of lazy loading is to load a component only when it is needed. 4. use React.memo for component Memoization. It helps cache functional components. 5. Virtualize a Large Lists Using react-window. React-window renders only the items in a large list that are currently visible, thus it becomes efficient when showing lists of any size.</p>

                </div>
            </div>

            
        </div>
    );
};

export default Blogs;