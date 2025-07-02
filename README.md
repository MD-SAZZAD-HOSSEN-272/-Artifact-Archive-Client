# Artifact Archive - Fullstack Project Specification

## 🔧 Technologies

* **Frontend**: React, React Router, Tailwind CSS, AOS, Framer Motion, React Icons
* **Backend**: Express.js, MongoDB, JWT, bcrypt, dotenv, CORS
* **Authentication**: Firebase (Email/Password & Google), JWT
* **Tools**: SweetAlert2, react-toastify

---

## 📁 Folder Structure

### Frontend (`client/`)

```
client/
├── src/
│   ├── components/        # Navbar, Footer, ProtectedRoute, Spinner, etc.
│   ├── pages/             # Home, Login, Register, AddArtifact, MyArtifacts, etc.
│   ├── routes/            # React Router DOM Setup
│   ├── context/           # AuthContext
│   ├── hooks/             # Custom hooks (e.g., useAxiosSecure.js)
│   ├── context/           # API calls
│   ├── App.jsx
│   └── main.jsx
└── 
```

---

## 🌐 Frontend Pages & Components

### 🔹 Navbar

* Shows site name/logo
* Links: Home, All Artifacts, Add Artifacts (Private)
* If **user not logged in**: shows "Login"
* If **user logged in**:

  * Show profile photo
  * On click: Dropdown with

    * Name
    * My Artifacts (Private)
    * Liked Artifacts (Private)
    * Logout

### 🔹 Footer

* Stylish footer with useful links and credits

### 🔹 Home Page

* **Banner/Slider**: 3 slides with Framer Motion animation
* **Featured Artifacts**: Top 6 by like count
* Each card shows: Image, Name, Short Description, Like Count, View Details
* "See All" button links to All Artifacts
* **Two Extra Sections**: Any relevant info (e.g., Timeline, Historical Facts)

### 🔹 Login Page

* Inputs: Email, Password
* Google Login
* Link to Register
* Show error/toast if login fails

### 🔹 Register Page

* Inputs: Name, Email, photoURL, Password
* Validate:

  * Uppercase
  * Lowercase
  * Min 6 chars
* On success: toast + redirect to home

### 🔹 Add Artifact Page (Private Route)

* Form fields:

  * Name, Image URL, Type (dropdown)
  * Historical Context, Short Desc, Created At, Discovered At, Discovered By
  * Present Location, Adder Name/Email (readonly)
* On submit:

  * Store to DB with like count = 0
  * Show success toast/alert

### 🔹 Artifact Details Page (Private Route)

* Show all fields
* Like Button (toggle): updates count and DB

### 🔹 All Artifacts Page

* Show all as cards (2–4 details each)
* Search bar to filter by name
* View Details button (private route)

### 🔹 Liked Artifacts Page (Private Route)

* Show all liked artifacts
* If none: meaningful message

### 🔹 My Artifacts Page (Private Route)

* Show only user's artifacts
* Each has: Update, Delete buttons
* If none: meaningful message

### 🔹 Update Page (Private Route)

* Prefilled form for editing (except likes/adder info)
* Update DB + toast

### 🔹 404 Page

* Not Found page with link to home

---

## 🔒 Authentication & Security

### Firebase Auth

* Email/password & Google login
* Context API for Auth

### JWT Token

* Generate on login/register (backend)
* Store in localStorage
* Send as Bearer token in protected API calls
* Use middleware to verify

---

## ✨ Features & Enhancements

* ✅ Dynamic Title per route
* ✅ Protected Routes (PrivateRoute wrapper)
* ✅ Loading Spinner for all fetches
* ✅ SweetAlert / Toast for all actions
* ✅ MongoDB sorting for featured artifacts
* ✅ Like count toggle (UI + DB)

---

## 🧪 Bonus Ideas (Optional)

* Modal instead of update page
* Dark mode toggle
* Pagination on All Artifacts page
* Responsive layout with Tailwind Grid

---

## 🚀 Deployment

* Frontend: Firebase Hosting / Vercel
* Backend: Vercel / Render / Railway
* Env: `REACT_APP_api_url`, `VITE_api_key`, etc.

---

## 🏁 Checklist Before Submission

* [ ] All private routes redirect properly
* [ ] CRUD works with toast/alerts
* [ ] Likes update in DB
* [ ] 404 page is added
* [ ] ProtectedRoute implemented
* [ ] JWT implemented and sent in headers
* [ ] Responsive & clean UI
