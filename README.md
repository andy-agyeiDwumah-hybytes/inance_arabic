# Inance Website Clone 💥

This is a React-based clone of the Inance website, built for practise purposes. It
features multi-language support (Currently supporting English, French, and Arabic) and
basic pages like Home, About, Services, and Contact Us.

## Features ✨

* **Multi-language support**: Switch between English, French, and Arabic
* **Contact Form**: Submissions are saved to Firestore and trigger an email notification
* **Google Analytics**: Monitors website performance (currently on localhost)

## Getting Started ✅

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

* `git clone https://github.com/andy-agyeiDwumah-hybytes/inance_arabic.git`
* `cd inance_arabic`

### 2. Create a Firebase Project

* Create a new project with [Firebase](https://firebase.google.com/)
* Set up a Firestore Database for your project
* Add a new Web App to you Firebase project to obtain your Firebase configuration details
* Download the **Trigger Email from Firestore** extension from Firebase
* Follow the tutorial on [Sending emails using Firestore and Firebase Extensions](https://invertase.io/blog/send-email-extension). Be sure to read up to **Sending emails using Firebase Functions triggers** section for setup instructions
* Also select **mail** as the Firestore collection where you would like to process emails from

### 3. Set Up Google Analytics

1. Create a Google Analytics Account: <br>
* If you haven't already, sign up for [Google Analytics](https://marketingplatform.google.com/about/analytics/)

2. Create a New Property: <br>
* Create a new Property 
* Select 'Web' as the plaform.
3. Configure the Property: <br>
* For the Website URL, enter 'www.localhost:xxxx/' (replace xxxx with your development server's port number)
4. Obtain Your Measurement ID: <br>
* Once the property is set up, you'll see your Google Analytics Measurement ID (it typically starts with 'G-')

### 4. Set Up Environment Variables

Create an `.env` file in the root of your project from the `.env.example` file. Add your configuration variables as follows:

```
# Google Analytics
VITE_GOOGLE_MEASUREMENT_ID='your-google-measurement-id'

# Firebase Configuration
VITE_API_KEY='your-firebase-api-key'
VITE_AUTH_DOMAIN='your-firebase-auth-domain'
VITE_PROJECT_ID='your-firebase-project-id'
VITE_STORAGE_BUCKET='your-firebase-storage-bucket'
VITE_MESSAGING_SENDING_ID='your-firebase-messaging-sender-id'
VITE_APP_ID='your-firebase-app-id'
VITE_MEASUREMENT_ID='your-firebase-measurement-id'
# Contact email for receiving messages from the Contact Form
VITE_CONTACT_EMAIL='your-email@example.com'
```

### 5. Configure Firestore Security Rules

To allow your project to work correctly during development, update your Firestore rules
 to allow access to the required collections.

**NOTE: These rules are simplified for development purposes. In a production environment,
 consider adding proper authentication and validation to secure your data.**

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // Allow create, update, and read operations in the 'users' collection
    match /users/{userId} {
      allow create, update, read: if true;
      allow delete: if false;
    }

    // Allow creation of documents in the 'mail' collection
    match /mail/{mailId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

### 6. Install Dependencies

`npm install`

### 7. Start The Development Server

`npm run dev`
