# Max Motor

## This is an electric BLDC motor manufacturer company's website. Live site: https://manufacturer-website-af272.web.app/

## Website & code overview video on Youtube: https://www.youtube.com/watch?v=ZM3G704p-90

## Website Features and Functionalities:
* Email/ password (login/Register) based login system
* Private/Protected Route
* Admin/User Dashboard
* Functionalities like adding, deleting, updating data in database  through server api calls
* Basic Payment System(To be implemented) 

## Used technologies in front-end: 
* HTML, CSS, 
* Tailwind CSS, DaisyUI
* Font Awesome
* React, react components, router, react hook form, react query, React Toastify
* Firebase(for website hosting, user login and registration)

## Back-end(server) code link: https://github.com/sayedpritom999/Manufacturer-website-server

## In the back-end, the implemented APIs are: 
1. Create users in MongoDB and issue a JWT token for the client
2. Verify admin
3. Create a new admin
4. Get all users
5. Get all orders
6. Get all orders for a particular user
7. Get a specific parts/item from the parts collection
8. Delete a specific order from the orders collection
9. Upload orders to the database & if already exists then replace that order
10. Upload reviews to the database
11. Get all the reviews from the database
12. Upload the users' details to the database
13. Upload new product to the database
14. Delete a certain product
15. Get the user's details from the database

## Used technologies in the back-end: 
* Node.js, express.js
* JSON Web Token,
* Mongodb(for database)
* Heroku(for server hosting)
