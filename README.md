# Full-Stack E-Commerce Project: A Comprehensive Overview

## Introduction
Embarking on a hands-on journey, this project centers around designing and building an advanced e-commerce platform leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js). Through this process, I aim to deepen my expertise in crafting dynamic, secure, and scalable web applications.

---

## Milestone 1: Initial Planning and Setup

### Objectives
This phase provided a foundation for:
- Structuring a MERN stack application.
- Familiarizing myself with e-commerce core functionalities.
- Preparing resources and tools for a streamlined development process.

### Key Features
1. **Technology Focus**: Adopting the MERN stack to enable seamless interaction between client-side and server-side technologies.
2. **API Development**: Learning to create modular, maintainable APIs for functions like user management, product cataloging, and transactions.
3. **Authentication Mechanisms**: Exploring methods to ensure secure user login and data protection.
4. **Database Schema Design**: Developing practical, scalable data models.
5. **Frontend UI/UX**: Planning an intuitive interface with React.js.

### Concepts Explored
- **REST APIs**: Creating endpoints for vital services like user registration, login, and order processing.
- **MongoDB Design**: Structuring databases to balance performance and maintainability.
- **Authentication and Authorization**: Exploring secure practices for access control.

---

## Milestone 2: Initial Application Setup

### Milestone Goals
- Establishing a boilerplate MERN application.
- Configuring backend services and database connections.
- Installing essential packages and dependencies.
- Laying down the project structure for development efficiency.

### Accomplishments
- **Server Configuration**: Built a Node.js backend with Express.js for API routing.
- **Database Connection**: Linked MongoDB for storing user and product data.
- **Environment Management**: Secured sensitive data using environmental variables.
- **Authentication Implementation**: Initiated user session management, password hashing, and validation routines.
- **Frontend-Backend Integration**: Designed basic React components to interact with backend APIs.

---

## Milestone 3: Backend Architecture Design

### Highlights
- Developed foundational server architecture using Express.js.
- Implemented middleware for essential functionality like error handling and request parsing.
- Validated backend performance through basic test routes.
- Constructed user-focused models and controllers to manage operations seamlessly.

---

## Milestone 4: User Authentication System

### Deliverables
- **User Model**: Designed a robust schema using Mongoose to handle essential user data.
- **Encryption**: Applied bcrypt for password hashing and secure storage.
- **Controllers**: Created endpoints to manage user registration and authentication workflows.
- **Validation**: Ensured inputs adhered to security standards, minimizing risks.

---

## Milestone 5: User Signup Page Development

### Achievements
- Designed a visually appealing signup interface with React and Tailwind CSS.
- Enabled avatar uploads with streamlined file handling.
- Integrated dynamic password visibility toggles for improved usability.
- Facilitated real-time feedback by handling API success and error responses gracefully.

---

This phased approach ensures steady progression while cementing critical full-stack development concepts and best practices. Future milestones include expanding functionalities like product management, order processing, and optimizing the user experience.
---
## Milestone 6: Backend Endpoint for Secure Signup 

### Objectives
This milestone focuses on establishing a robust backend endpoint to support the Signup page. By the end of this phase, you will:
- Gain a deep understanding of password encryption before storage.
- Learn how to securely save comprehensive user data in the database.

---


# Milestone 7: Backend User Login Endpoint with Password Validation 🔐

## Overview 📌
This milestone focuses on building a **secure login endpoint** for user authentication. The process includes **validating user credentials** and securely comparing the provided password with the **encrypted password** stored in the database. 

The implementation follows industry standards for **privacy** and **data protection**, ensuring a reliable and robust login system.

---

## Features 🚀
### 1. **User Login Endpoint**
   - Accepts **email/username** and **password** as inputs.
   - Validates user existence and authenticates credentials.

### 2. **Password Encryption & Comparison**
   - Utilized **bcrypt** for password hashing and comparison.
   - Ensured user passwords are protected even if the database is compromised.

### 3. **Secure Authentication Process**
   - Step-by-step approach:
     1. Fetch user data based on the provided email/username.
     2. If the user does not exist, return an error: *"User does not exist."*
     3. Hash the entered password using bcrypt and compare it with the stored hash.
     4. If the hashes match, the user is successfully authenticated; otherwise, return an error.

---

## Why Password Encryption Matters 🔒
### 1. **Protects User Data**:
   - Prevents the exposure of plain-text passwords in case of a data breach.
### 2. **Complies with Security Standards**:
   - Adheres to regulations like GDPR and PCI-DSS.
### 3. **Enhances Security**:
   - Hashed passwords are **one-way encrypted**, making it challenging to reverse-engineer them.

---

## Tech Stack 🛠️
- **Node.js/Express**: For creating the backend API.
- **bcrypt**: For password hashing and secure comparison.
- **Database (e.g., MongoDB)**: For user record storage.

---

## Getting Started 🏁
1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. Test the endpoint using tools like **Postman**:
   - Endpoint: `POST /login`
   - Payload:
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```

---




# Milestone 8: Product Card Component & Homepage Layout 🎨✨

## Overview 📌
In this milestone, we developed a **frontend card component** for products and designed a structured **homepage layout** to display these cards. This project demonstrates the principles of reusability, organized design, and dynamic rendering to enhance user experience in web applications.

---

## Features 🚀
### 1. **Reusable Card Component**
   - Showcases product details such as **name**, **image**, and **price**.
   - Flexible design with props for dynamic content.
   - Streamlined layout to maintain visual consistency.

### 2. **Dynamic Data Rendering**
   - Utilized **array mapping** to iterate over product lists and render multiple cards.
   - Passed unique product data (name, price, image) dynamically to each card.

### 3. **Responsive Homepage Design**
   - Created a neat **grid layout** or **flexbox** to display cards effectively.
   - Ensured a visually appealing and user-friendly product showcase.

---

## How It Works 🔧
1. **Card Component Creation**:
   - Developed a modular card component that accepts props for `name`, `price`, and `image`.
2. **Homepage Layout**:
   - Set up a grid structure for multiple product cards using modern CSS techniques.
3. **Dynamic Rendering**:
   - Products data is passed dynamically to the card component via **array mapping**, allowing scalability for more products.

---

## Tech Stack 🛠️
- **HTML**
- **CSS** (for layout and design)
- **JavaScript** (for rendering cards dynamically)

---


## Submission Progress 🚩
- **Code Repository:** [GitHub Link](#)  
- **README:** Updated with milestone details and implementation steps.  
- **Project Completed:** Reusable card components and a functional homepage layout are ready.

---


=======
### Key Features
1. **Password Encryption**:  
   - Utilize `bcrypt` to hash passwords during signup.  
   - Prevent storing plain-text passwords in the database.  

2. **User Data Management**:  
   - Store user details such as name, email, and encrypted passwords securely.  
   - Ensure the database structure supports both scalability and security.  

### Benefits of Encrypting Passwords
- **Protect User Data**: Safeguards passwords in case of data breaches.  
- **Enhance Privacy**: Prevents passwords from being visible to unauthorized individuals.  
- **Regulatory Compliance**: Adheres to security standards like GDPR and PCI-DSS.  
- **Mitigate Password Theft**: Makes it significantly harder for attackers to compromise accounts.

### Steps for Implementation  
Here’s how we’ll implement this in the live coding session:

1. **Encrypt Passwords**:  
   - Leverage `bcrypt` to generate a hash from the user’s password.  
   - Store the hashed password instead of raw text in the database for added security.  

2. **Database Integration**:  
   - Design a schema to save all necessary user information, including encrypted passwords, efficiently.  
   - Validate inputs to prevent unauthorized or malicious data entry.  

This milestone empowers the application to store user data safely and securely, forming a strong foundation for reliable user authentication and privacy compliance.



# Milestone 9: Product Input Form 📋

## Overview 🚀
In this milestone, we created a frontend form for taking product input details, including the ability to upload multiple images. The form serves as a starting point for managing product data in the application.

### Key Features Implemented 🎯
1. **Product Input Form**: 
   - A user-friendly form that collects all necessary details about a product.
   - Fields include product name, description, price, category, and more.

2. **Multiple Image Uploads**:
   - The form supports uploading multiple images for a single product.
   - This allows users to showcase their products with various perspectives.

3. **Validation and UX Improvements**:
   - Basic validation to ensure proper inputs are submitted.
   - Enhanced user experience with clear instructions.

### Additional Notes 📝
This lesson emphasized the foundation of creating and submitting product data. Future enhancements can include:
- Adding admin-specific access control to restrict who can upload products.
- Enabling a shop profile feature to associate products with specific shops.

### Technologies Used 🛠️
- **Frontend**: HTML, CSS, JavaScript
- **Additional Features**: File input handling for multiple images.




## Milestone 10: Product Schema and Endpoint Creation

### Overview
In this milestone, we focused on defining a Mongoose schema for products and creating an API endpoint to store product details in MongoDB. This involved structuring the product data, implementing validation, and ensuring data integrity.

### Learning Outcomes
- Defined a **Mongoose schema** for product data, including fields like:
  - `name` (String, required)
  - `description` (String, optional)
  - `price` (Number, required, validation for positive values)
  - `imageUrl` (String, optional, validated as a URL format)
- Implemented validation to ensure only valid data is stored in MongoDB.
- Created a **POST endpoint** to handle product creation requests.
- Integrated Mongoose to connect with MongoDB and store validated product data.
- Explored additional functionalities like role-based access control (e.g., allowing only admins or shop owners to add products).

### Implementation Details
1. **Mongoose Schema Creation**
   - Defined a schema using Mongoose.
   - Added field-level validation.
   - Created a model to interact with MongoDB.

2. **API Endpoint Development**
   - Built a POST endpoint (`/api/products`) to handle product data submission.
   - Implemented request validation before storing data in the database.
   - Used `express-validator` for additional validation checks.

3. **Error Handling & Data Integrity**
   - Handled errors for invalid data submissions.
   - Ensured only properly formatted data is stored.

### Next Steps
- Implement role-based access control (RBAC) to allow only authorized users to upload products.
- Extend the schema to include categories, stock status, and user-specific product listings.

### Submission Details
- The code has been pushed to the GitHub repository.
- The repository is publicly accessible.
- This README update summarizes the progress for **Milestone 10**.


## Milestone 11: Dynamic Home Page with Product Data

Overview

In this milestone, we implemented a dynamic home page that displays all products stored in MongoDB. This was achieved by writing a backend endpoint to fetch product data and rendering it dynamically on the frontend using a product card component.

Learning Outcomes

Created an API endpoint to extract and send product data from MongoDB.

Implemented a function on the frontend to fetch the product data.

Dynamically displayed the product data using a reusable product card component.

Implementation Steps

Backend:

Developed an API endpoint that retrieves all product data from MongoDB.

Ensured data is formatted and sent as a JSON response.

Frontend:

Created a function to fetch product data from the backend.

Passed the received data to the product card component for dynamic rendering.

Integrated the product listing into the home page.


Submission:

Code has been pushed to the GitHub repository.

The repository is publicly accessible.

This README file summarizes the progress for Milestone 11.


## Milestone 12:

In this milestone, I implemented the "My Products" page, which allows users to view all products associated with their email. The following key features were developed:

API Endpoint Creation: Developed an endpoint that retrieves products from MongoDB based on the user's email. This endpoint queries the products collection and returns the relevant data to the frontend.

Data Fetching: Implemented a function on the frontend to fetch the product data from the newly created API endpoint. This function handles the API call and updates the state with the retrieved products.

Dynamic Display: Utilized the existing product card component to dynamically render the list of products on the "My Products" page. Each product is displayed using a card format, enhancing the user interface and experience.

This milestone successfully enhances the application by providing users with a personalized view of their added products.



Sure! Here’s a suggested update for your README file to reflect the changes and functionalities introduced in Milestone 13:

---

# Project Title

## Milestone 13: Edit Uploaded Products 🌟

### Overview
In this milestone, we have implemented a new functionality that allows users to edit the details of uploaded products. This includes adding an edit button to the product card, which enables users to update existing product information stored in our MongoDB database.

### Learning Goals 🎯
By the end of this milestone, you will learn:
- How to write an endpoint that updates existing data in MongoDB.
- How to auto-fill a form with previous data and provide an option to edit it.

### Features Added
- **Edit Button**: Each product card now includes an edit button that, when clicked, will populate a form with the current product details.
- **Auto-fill Form**: The form will automatically fill with the existing product data, allowing users to make changes easily.
- **Update Endpoint**: A new backend endpoint has been created to handle the update requests and modify the product details in the MongoDB database.

### Steps for Implementation 📝
1. **Backend Endpoint**:
   - Created an endpoint that receives the updated product data.
   - The endpoint processes the request and updates the corresponding product in the MongoDB database.

2. **Frontend Changes**:
   - Added an edit button to each product card.
   - Implemented functionality to open a form pre-filled with the product's current details when the edit button is clicked.
   - Provided an option to save the changes, which triggers the update endpoint.

### How to Use
1. Navigate to the product list.
2. Click on the edit button on the product you wish to update.
3. Modify the details in the auto-filled form.
4. Click the save button to update the product information.

### Conclusion
With this milestone, users can now easily edit their uploaded products, enhancing the overall user experience and functionality of the application.

---

## Milestone 14: Delete Functionality Implementation

### Overview
In this milestone, we added a delete button to product cards on the frontend and created a backend endpoint to delete products from MongoDB using their ID.

### Learning Outcomes
- Developed a **DELETE endpoint** to remove products by ID from MongoDB.
- Integrated the delete functionality into the frontend with a button on each product card.
- Implemented functionality to send the product ID to the server when the delete button is clicked.

### Implementation Details
1. **Backend Endpoint Development**
   - Created a DELETE endpoint (`/api/products/:id`) to handle product deletion requests.
   - Utilized Mongoose to find and delete products by their ID.

2. **Frontend Integration**
   - Added a delete button to each product card.
   - Configured the button to send a DELETE request to the backend with the corresponding product ID.

3. **Error Handling**
   - Managed errors for invalid or non-existent product IDs.
   - Ensured smooth user feedback upon successful or failed deletion.

### Next Steps
- Implement confirmation dialogs before deletion to prevent accidental removals.
- Add notifications to inform users about the status of deletion.
- Enhance role-based access control to restrict delete permissions to authorized users.

### Submission Details
- The code has been pushed to the GitHub repository.
- The repository is publicly accessible.
- This README update summarizes the progress for **Milestone 14**.

### Milestone 15: Navbar Component 🚀  

In this milestone, we created a **Navbar** component and integrated it into all pages for smooth navigation.  

#### **Key Learning Outcomes**  
- Creating a reusable **Nav** component.  
- Implementing navigation across multiple pages:  
  - Home  
  - My Products  
  - Add Product  
  - Cart  
- Making the Navbar **responsive** for all screen sizes.  

This milestone enhances user experience by ensuring seamless navigation across the application. 🎯


Here's a concise summary for your README update:  

**Milestone 16: Product Info Page**  

In this milestone, we create a product information page that displays detailed product data. Users can select the desired quantity and add the product to their cart.  

### **Learning Goals**  
- Create a new page to display individual product details.  
- Implement a quantity selector.  
- Add an "Add to Cart" button for purchasing.


Here’s a concise summary for your README update:  

---

### Milestone 17: Add to Cart Functionality 🛒  

In this milestone, we implemented the backend logic to add products to the cart and store them in the database.  

#### Key Updates:  
- **Updated User Schema** to store cart products.  
- **Created a Cart Schema** to manage cart items.  
- **Developed an API Endpoint** to receive product details and save them to the cart.  

This milestone helps in understanding cart functionality and database integration for e-commerce applications.  

---

Milestone 18: Fetch Cart Items 🛒
In this milestone, we implemented the backend logic to retrieve products from the user's cart for display on the cart page.

Key Updates:
Created an API Endpoint to handle requests from the cart page.
Fetched Cart Products using the user's email to display their cart items.
This milestone enhances the cart functionality by enabling users to view their selected products.



---
# **Milestone 19: Cart Functionality**

## Overview
In this milestone, we implemented the cart functionality by creating a frontend UI for the cart page and developing backend endpoints to manage product quantities within the cart.

## Learning Goals 🎯
By completing this milestone, we:
- Created a cart page to display products inside the cart using the endpoint built in Milestone 18.
- Implemented an option to increase and decrease the quantity of each product using `+` and `-` buttons.
- Developed backend endpoints to handle quantity adjustments for products in the cart.

## Implementation Details

### Frontend:
- Created a dedicated **Cart Page** to display all products added to the cart.
- Implemented dynamic UI components to show product details, prices, and quantity controls.
- Added `+` and `-` buttons to allow users to adjust the quantity of each product.
- Integrated API calls to fetch and update cart data dynamically.

### Backend:
- Created API endpoints to **increase and decrease** the quantity of a product in the cart.
- Updated the database to reflect changes in product quantities.
- Implemented validation checks to prevent negative quantities.


## How to Test
1. Navigate to the cart page and verify that products appear correctly.
2. Use the `+` and `-` buttons to adjust the quantity and observe real-time updates.
3. Check the API responses to ensure correct updates to the database.
4. Ensure the UI reflects changes made to the cart without requiring a page refresh.

## Conclusion
With this milestone, we have successfully implemented a dynamic shopping cart system that allows users to manage product quantities seamlessly. This enhances user experience and lays the foundation for further enhancements like checkout functionality.

---
🎉 **Milestone 19 Completed!** 🚀



## **Milestone 20: Profile Page & User Data Endpoint**  

### Overview  
In this milestone, we implemented a profile page frontend and created a backend endpoint to retrieve user data.  

### Key Features  
- **Backend Endpoint:** Sends user data via email.  
- **Profile Page Frontend:** Displays user details including profile photo, name, and email.  
- **Address Section:**  
  - Shows user addresses.  
  - Displays "No address found" if no addresses exist.  
  - Includes an "Add Address" button for adding new addresses.  

This milestone enhances user profile management by integrating backend data retrieval and frontend rendering. 🚀  

---

## **Milestone 21: Address Input Form** ##

## Overview
In this milestone, we created a frontend page for address input that allows users to enter and store their address details. The form includes fields for country, city, address lines, zip code, and address type.

## Learning Goals 🎯
By completing this milestone, you have:
- Created a frontend form to collect address details.
- Implemented state management to store the input address.
- Set up navigation from the profile page to the address form page.
- Gained a deeper understanding of handling user inputs in forms.

## Features
- **User Input Fields:**
  - Country
  - City
  - Address Line 1
  - Address Line 2
  - Zip Code
  - Address Type (Home/Work/Other)
- **State Management:**
  - The form data is stored in a state to handle user input dynamically.
- **Navigation:**
  - Clicking "Add Address" on the profile page navigates to the address form page.
- **Validation:**
  - Ensures required fields are filled before submission.


## Conclusion
This milestone helped in understanding how to create a structured address input form, manage state effectively, and enable seamless navigation within a React application.


---

## **Milestone 22: Address Storage Endpoint** ##

## Overview
In this milestone, we created a backend endpoint that receives the address details from the frontend and stores them inside the user's profile in the database.

## Learning Goals 🎯
By completing this milestone, you have:
- Created a backend endpoint to handle address data.
- Implemented logic to add the address to the address array inside the user collection.
- Understood how to handle API requests and database updates.

## Features
- **Endpoint Creation:**
  - Receives address data from the frontend form.
  - Validates the address input before storing it.
- **Database Integration:**
  - Adds the address to the address array in the user collection.
  - Ensures the user profile is updated correctly.
- **Error Handling:**
  - Returns appropriate responses for success or failure cases.


## Conclusion
This milestone helped in understanding how to create and integrate a backend API that stores user addresses in the database. The knowledge gained will be useful for handling user profiles dynamically in future projects.

# Milestone 23: Place Order & Select Address

## Learning Goals 🎯
By the end of this milestone, you will:
- Add a "Place Order" button inside the cart.
- Create a "Select Address" page displaying all available addresses for selection.
- Implement a Mongoose schema for storing order details.
- Develop a backend endpoint to fetch all user addresses.

## Implementation Steps 📝
### Frontend:
1. **Add "Place Order" Button:**
   - Implement a button inside the cart page that redirects users to the "Select Address" page.
   
2. **Create "Select Address" Page:**
   - Display all saved addresses of the user.
   - Provide an option to select one address for delivery.

### Backend:
1. **Create an Endpoint to Fetch User Addresses:**
   - Implement a route that retrieves all stored addresses for a user.

2. **Write Mongoose Order Schema:**
   - Store essential order details, including selected address, products, total price, and user ID.

## Expected Outcome 📌
- Users can navigate from the cart to the "Select Address" page.
- Users can choose an address before placing an order.
- The backend successfully retrieves stored addresses and saves order details.

This milestone enhances the e-commerce experience by allowing users to finalize their delivery details efficiently.


## **Milestone 24: Order Confirmation Page** ##

### **Welcome to Milestone 24!** 🌟

In this milestone, we created an order confirmation page in the frontend where we display the ordered products, selected address, and total price details.

### **Learning Goals** 🎯
By the end of this milestone, we have:
- Created an order confirmation page.
- Displayed ordered products dynamically.
- Implemented address selection and display.
- Calculated and showed the total cart value.
- Implemented a "Place Order" button to complete the order process.

### **Steps for Milestone 24** 📝
1. Displayed all the products the user is ordering.
2. Showed the selected delivery address.
3. Displayed the total value of the cart.
4. Added a "Place Order" button at the bottom to confirm the order.

### **Completion Note:**
The order confirmation page has been successfully implemented, providing users with a clear overview of their order details before placing it.


# Milestone 25: Place Order Endpoint

## 🚀 Introduction
Welcome to Milestone 25! In this milestone, we have implemented a backend endpoint that allows users to place orders. This functionality ensures that each product in the order is processed separately while sharing the same address details.

## 🎯 Learning Goals
By completing this milestone, you will:
- Develop a backend endpoint for placing an order.
- Retrieve user details using their email.
- Store order details in the MongoDB `orders` collection using the predefined schema.

## 📝 Implementation Steps
1. **Create the Order Endpoint**: Develop an API endpoint that accepts user details, address, and product information.
2. **Retrieve User ID**: Extract the user's email from the request and use it to find the corresponding `_id` from the `users` collection.
3. **Process Each Product Separately**: For every product in the request, create a separate order while maintaining the same address.
4. **Store Orders in MongoDB**: Use the existing `Order` schema to save order details in the `orders` collection.



Here’s an improved version of your README update with better clarity and grammar:  

---

# 🏆 Milestone 26: Create Backend Endpoint for Placing Orders  

Hey Kalvians! 👋  

Welcome to **Milestone 26**! 🌟  

## 🎯 Learning Goals  
By the end of this milestone, you will:  

✅ Create a backend endpoint to retrieve all orders of a user.  

## 📝 Steps for Milestone 26  
1. Create an endpoint that receives the user's email.  
2. Use the email to retrieve the `_id` of the user from the database.  
3. Fetch all orders associated with that `_id`.  
4. Send the retrieved orders as a response.  

This lesson will help you understand how to fetch all orders for a specific user in your backend.  


## **Milestone 27: Implementing the My Orders Page for Seamless Order Tracking** ##
📦 My Orders Page

🌟 Overview

The My Orders page allows users to view all their past and ongoing orders in one place. This page fetches order details from the backend and displays them in an organized manner.

✨ Features

🔄 Fetch and display all user orders by making a GET request to the /my-orders endpoint.

📧 Orders are retrieved based on the user's email.

📋 Orders are presented in a user-friendly format.

🏠 Integrated into the navigation bar for easy access.


📝 Implementation Steps

🖥 Create the My Orders Page

Develop a React component to display user orders.

📡 Fetch User Orders

Send a GET request to the /my-orders endpoint.

Pass the user’s email to retrieve their orders.

📑 Display Orders

Format and show the fetched data in a structured layout.

🔗 Add Page to Navbar

Ensure smooth navigation by linking the My Orders page in the navbar.


## **Milestone 28: ❌ Cancel Order Feature** ##

## 🌟 Overview
The **Cancel Order** feature allows users to cancel their placed orders. This involves updating both the frontend and backend to support order cancellation.

## ✨ Features
- 🛑 Add a **Cancel Order** button next to each active order on the **My Orders** page.
- 🚫 The cancel button will be hidden for orders that are already canceled.
- 🔄 Create a **backend endpoint** to handle order cancellation.
- ✅ Update the order status to **"Canceled"** in the database.


## 📝 Implementation Steps
1. **🖥 Update My Orders Page**
   - Add a **Cancel Order** button next to each order.
   - Hide the button for orders that are already canceled.
2. **🔧 Create Cancel Order Endpoint**
   - Develop a new **POST** endpoint: `/cancel-order`.
   - Receive `orderId` in the request payload.
   - Fetch the order using this ID, update its status to "Canceled," and save it.
3. **🔄 Integrate API with Frontend**
   - On clicking the **Cancel Order** button, send a request to the backend.
   - Update the UI to reflect the canceled order status.


## 🎯 Conclusion
This milestone enhances the **My Orders** page by allowing users to cancel their orders when needed. It helps in understanding how to modify order statuses and manage data updates dynamically.


# Milestone 29: PayPal Payment Gateway Integration ✅

## 🌟 Overview
In this milestone, I successfully integrated the PayPal payment gateway into my application, allowing users to choose between Cash on Delivery (COD) and online payment via PayPal.

## 🎯 What I Accomplished
By completing this milestone, I:
- Successfully implemented the PayPal API.
- Enabled secure online payments within the application.
- Provided users with a seamless choice between COD and PayPal payment.

## 🛠 Implementation Steps

### 1️⃣ Set Up PayPal Developer Account
- Created a developer account on the [PayPal Developer Dashboard](https://developer.paypal.com/).
- Set up a **Sandbox Account** for testing transactions.
- Retrieved and saved the **User ID** and **Client ID** from PayPal for API integration.

### 2️⃣ Added Payment Options to Order Confirmation Page
- Implemented **radio buttons** for payment selection:
  - **Cash on Delivery (COD)**
  - **Online Payment via PayPal**
- Configured PayPal buttons to dynamically appear when the **Online Payment** option is selected.

### 3️⃣ Successfully Integrated PayPal Payments
- Ensured PayPal payment buttons display correctly.
- Connected the application to PayPal’s API for secure transactions.
- Successfully processed test transactions in sandbox mode.

## 📌 Features Implemented
✅ Sandbox test account setup
✅ PayPal Client ID configuration
✅ Payment selection with radio buttons
✅ Dynamic rendering of PayPal buttons
✅ Secure online payment integration


## 🚀 Conclusion
With this milestone, I have successfully enabled PayPal online payments in my application. Users can now securely complete their transactions, enhancing the overall shopping experience. 🎉



Absolutely! Here's a short, lovely update for your README that captures the essence of Milestone 30:

---

## **💳 Milestone 30: PayPal Payment Integration** ##

In this milestone, we integrated **online payments** using the **PayPal API**! 💥  
After setting up our sandbox account and getting the User ID in Milestone 29, we moved forward by:

- Installing the `react-paypal-js` package
- Using `PayPalScriptProvider` to enable smooth payment options like credit and debit cards 💸
- Seamlessly connecting our app with PayPal using the client key 🔑

This update brings us one step closer to real-world e-commerce capabilities! 🚀

> 📘 Refer to the official PayPal ReactJS documentation for deeper implementation guidance.

---

Let me know if you'd like a version with emojis dialed down or even a more professional tone!


Got it! Here's a refreshed version of the README using **first-person voice** and rewording the steps to make it sound more personal and engaging, without directly copying what you provided:

---

## **🌟 Milestone 31: Managing Global State with Redux** ##

Welcome to Milestone 31!  
In this task, I explored how to handle **global state** in a React application using **Redux**.

---

## 🎯 What I Learned

- Setting up Redux in a React project  
- Creating a Redux store to manage global state  
- Writing and dispatching actions  
- Accessing global state across different components



### 2. Created the Store Folder

I made a new folder called `store` and added two files inside it:
- `store.js` — to define and configure the Redux store
- `userActions.js` — to handle user-related actions

---

### 3. Configured the Redux Store



### 4. Wrote the Action Function


### 5. Connected Redux to the App


## 📌 Highlight

The Redux store now holds the **user email** as global state, which can be accessed or updated from any component in the app. Super useful for things like login systems, dashboards, or user profiles.

---

## ✅ Done and Dusted!

This milestone helped me understand the core idea of global state and how Redux fits into the picture. Looking forward to building more complex state flows using this setup!

---

Let me know if you’d like a version with code examples using `useSelector` and `useDispatch` next!


Absolutely! Here’s your updated README with a more personal and engaging tone using **"I did"** throughout:

---

## **🌟 Milestone 32: Going Global with Redux! 🌍** ##

Welcome to **Milestone 32** — a major step forward in making my app smarter and more connected using **Redux** for global state management. Let’s dive into what I did! 💪

---

## 🚀 What I Did

In this milestone, I:

- Used **Redux** to store the **user’s email globally**
- Accessed the stored email across multiple pages
- Learned how to use **`dispatch`** to update state and **`useSelector`** to retrieve it  
- Took a big leap in mastering global state management in React

---

## 🛠️ How I Did It

### 1️⃣ Stored the Email from Login Page


### 2️⃣ Accessed the Email Anywhere


## 💡 What I Learned

By doing this, I understood:

- How to avoid prop drilling
- How Redux helps in managing data across the app
- The value of a centralized state for a seamless user experience

---

## 🎉 Mission Accomplished!

With Milestone 32 completed, I’ve added another powerful tool to my React toolkit. Managing global state with Redux? ✅ Done and dusted!

---


Here’s your README section for **Milestone 33** written in the same engaging and informative format:

---

Sure! Here's your updated README section for **Milestone 34**, matching the style of Milestone 33:

---

## **Milestone 34: Validating JWT Tokens from Cookies** ##
🛡️ JWT Token Validation for Protected Routes  

🌟 **Overview**  

This milestone focuses on securing your application by validating the JWT tokens stored in cookies. You’ll ensure only authenticated users can access certain pages, forming the backbone of protected routes and user-based access control.

✨ **Features**  

🍪 Extract JWT token from the browser cookie.  
🔍 Send the token to the backend for validation.  
✅ Middleware checks token authenticity and validity.  
🚫 Prevents access to routes without proper authentication.  

📝 **Implementation Steps**  

🔍 **Get Token from Cookie**  

📨 **Send Token to Backend**  

🧠 **Create JWT Middleware**  


🚫 **Redirect Unauthorized Users**  
If token verification fails, redirect the user to the login page or return a 401 Unauthorized response.

🚀 **Next Steps**  
With token validation in place, you’re now ready to implement full session management and user-specific pages with robust access control.

---



