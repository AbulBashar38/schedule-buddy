# Schedule Buddy

This is a great appointment scheduler application built using React. Here's a breakdown of the functionalities and specifications for running the project locally.

### 1. Live Demo
Demo: [https://schedule-buddy-app.web.app](https://schedule-buddy-app.web.app)

### 2. Run it locally
Clone the repository into your projects directory:
```
git clone https://github.com/AbulBashar38/schedule-buddy.git
```
Or
```
git clone git@github.com:AbulBashar38/schedule-buddy.git
```
Install Dependency
```
npm i
```
or 
```
yarn
```
Create a `.env` file in your project `root directory`.

<img src="./src/assets/images/env.png" alt="env" width="200"/>

Paste this `credential` in your `.env` file

```.env
VITE_FIREBASE_API_KEY=AIzaSyCXK9h_wnhNHvnaTZ3FREI4BDDOICPfr6g
VITE_FIREBASE_AUTH_DOMAIN=schedule-buddy-app.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-dev-app.firebaseio.com
VITE_FIREBASE_PROJECT_ID=schedule-buddy-app
VITE_FIREBASE_STORAGE_BUCKET=schedule-buddy-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=505046968992
VITE_FIREBASE_APP_ID=1:505046968992:web:1582654123e27ee9dd37c5Ï

```
Build your project to run in production mode
```
npm run build
```
Or
```
yarn build
```
Finally run your project:
```
npm run preview
```
Or
```
yarn preview
```
Now you can browse the project at [http://localhost:4173/](http://localhost:4173/)

