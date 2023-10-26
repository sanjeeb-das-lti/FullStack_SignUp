This project demonstrates the Signup and Login Page with real authentication and authorization using JWT tokens. This is developed for demostration of JWT mechanism with real data.

This involves 2 parts i.e. Frontend which deals with the capturing of user details for Signup/Login and Backend which checks for user authenticity and logs in on correct credentials.

Technologies used in the development are - 
1. Frontend - ReactJS, Tailwind CSS, Redux Toolkit for managing the user login details such as firstname, lastname and unique id, axios for communication

2. Backend - SpringBoot 3.0, MySql, Java 17, JPA, Spring Security (JWT mechanism)

Frontend Dev:
This involves creating a header with Signup and Login Components. The user firsts signsup and then logs in with the user email and the password used for signup. Upon succesfull login, the user is redirected to the dashboard
where it can see the posts it has saved which is secured to the specific user. On logout, the user is then redirected to the login page.

Backend Dev:
This involves setting up the Posts Controller which the user can write and save. The signup and login controllers are set up for the succesfull registration and login which saves and fetches user from the MySQL DB.
The Security mechanism involves the JWT mechanism with the OncePerRequestFilter being implemented along with the SecurityFilterChain. Please find a smaple flow of the JWT mechanism.

![image](https://github.com/sanjeeb-das-lti/FullStack_SignUp/assets/63063354/6335bd60-1aa1-4203-8d60-8c7b4fe8cd56)


