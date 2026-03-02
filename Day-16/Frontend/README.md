📸 InstaClone – Full Stack Social Media Application

A full-stack Instagram-inspired social media web application built using modern web technologies.
This project demonstrates authentication, protected routing, post creation, and error handling with a clean UI.

🚀 Live Application Flow
🔄 1. Default Landing (Feed Page)

When you open the website, the Feed page loads first.

The feed initially shows a loading state.

However, the feed is protected.

You must be logged in to access and view posts.

If not authenticated → You must log in first.

🔐 2. Login Page

Route:

/login

To access login, manually add /login in the URL.

Enter your username and password to authenticate.

If you do not have an account, click the Register button available on the login form.

📝 3. Register Page

Route:

/register

New users must register first.

After successful registration, you can log in and access the feed.

➕ 4. Create New Post

After logging in, navigate to the Feed page.

Click the "New Post" button.

Select an image.

Add a caption.

Click Create Post to publish.

🚫 5. Page Not Found Handling (404)

If you try to access any route other than:

/

/login

/register

You will be redirected to a PageNotFound (404) screen.

This ensures proper route handling and improves user experience.

🛠 Tech Stack
Frontend

React.js

React Router DOM

Tailwind CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

Authentication

JWT (JSON Web Token)

Protected Routes

Middleware Authorization

📂 Project Structure
client/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── features/
 │   ├── assets/
 │   └── App.jsx

server/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 └── server.js
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repository-name.git
2️⃣ Install Dependencies
Frontend
cd client
npm install
Backend
cd server
npm install
3️⃣ Run the Application
Start Backend Server
npm run dev
Start Frontend
npm run dev
🔒 Protected Routes

Feed page is accessible only after authentication.

JWT is used to verify user identity.

Unauthorized users cannot access protected content.

🚧 Features Under Development

The following features are currently in progress:

❤️ Like functionality

💬 Comment system

👤 User profile page

🔍 Explore section improvements

🔔 Notification system

Follow / Unfollow feature

Responsive design enhancements

📸 Screenshots
🔐 Login Page

➕ Create Post Page

📰 Feed Page

🚫 404 Page Not Found

🎯 Learning Highlights

This project demonstrates:

Full Stack Development

REST API Integration

Authentication & Authorization

Protected Routing

State Management

Error Handling (404 Routing)

UI/UX Design with Tailwind

🤝 Contribution

Contributions are welcome!
Feel free to fork this repository and submit a pull request.

📄 License

This project is open-source and available under the MIT License.