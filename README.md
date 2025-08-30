# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 📝 Task Tracker App

![GitHub Repo stars](https://img.shields.io/github/stars/Talha-Tahir2001/task-tracker?style=social)
![GitHub forks](https://img.shields.io/github/forks/Talha-Tahir2001/task-tracker?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/Talha-Tahir2001/task-tracker)
![License](https://img.shields.io/github/license/Talha-Tahir2001/task-tracker)
![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white&style=flat)
![Vite](https://img.shields.io/badge/Powered%20by-Vite-B73BFE?logo=vite&logoColor=yellow)


A simple **Task Tracker** built with **React 19 + Vite**. This app demonstrates React fundamentals like **state management, props, routing, forms and reusable components**.

🚀 Features:

-   Landing page with navigation
    
-   Task Tracker page to add and delete tasks
    
-   About page with app details
    
-   Header and Footer components for better structure
    
-   Routing with **React Router DOM v7**
    
-   Clean and responsive UI
    

----------
## Prerequisites

* **Node.js:** Ensure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
* **npm (Node Package Manager):** npm comes with Node.js, so it should be installed automatically.
* **Vite:** Install Vite:

    ```bash
    npx create-vite@latest
    ```

## 📸 Screenshots

### Landing Page

> A simple home page with a button to navigate to the task tracker.

![Home](/public/home.png)

### Task Tracker

> Add tasks, display them in a list, and delete tasks with a button.

> ![Task-Tracker](/public/task-tracker.png)

### About Page

> Displays information about the project.

> ![Home](/public/about.png)

----------

## 🛠️ Tech Stack

* **[React](https://react.dev/) :** A platform for building web applications.
 * **[Vite](https://vite.dev/guide/) :** A build tool that aims to provide a faster and leaner development experience for modern web projects
 * **[Tailwind CSS](https://tailwindcss.com/) :** A utility-first CSS framework.
 * **[Shad-cn/UI](https://ui.shadcn.com/) :** A component library for React by Vercel
 * **[Lucide-Icons](https://lucide.dev/) :** A collection of 1548 icons made by the community
 * **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) :** **JavaScript** (**JS**) is a lightweight interpreted (or [just-in-time compiled](https://developer.mozilla.org/en-US/docs/Glossary/Just_In_Time_Compilation)) programming language with [first-class functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
 * **[Vercel](https://vercel.com/) :** Developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web
    

----------

## 📂 Project Structure
task-tracker/  
│── public/ # Static assets  
│── src/  
│ ├── components/  
│ │ ├── Header.jsx # App header with navigation  
│ │ ├── Footer.jsx # App footer  
│ │ ├── TaskForm.jsx # Add task form  
│ │ ├── TaskList.jsx # Display tasks  
│ ├── pages/  
│ │ ├── LandingPage.jsx # Landing page  
│ │ ├── TaskTracker.jsx # Task tracker page  
│ │ ├── About.jsx # About page  
│ ├── App.jsx # Main app with routes  
│ ├── main.jsx # React entry point  
│── package.json  
│── vite.config.js  
│── README.md

## ⚙️ Installation & Setup  
### Clone the project repository to your local machine:

```bash
git clone https://github.com/Talha-Tahir2001/task-tracker
```
### Navigate to Project
```bash
cd task-tracker
```
### Install dependencies
```bash
npm install
```
### Run the development server:
```bash
npm run dev
```
### Build the project:
```bash
npm run build 
```
### Preview the production build:
```bash
npm run preview
```
This will run the application at `http://localhost:5173/`.

## Deployment 
### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init
npm run build 
firebase deploy
```
### Vercel
```bash
Push your Code to Github
Go to [Vercel](https://vercel.com/) and create your account
Just connect your github account with vercel
Import a project and hit Deploy
```
### Netlify
```bash
Push your code to GitHub
Go to [Netlify](https://netlify.com) and import your repository
Set the build command: `npm run build`
Set the publish directory: `dist/you-directory`
Click **Deploy**
```

----------

## 📖 Usage

1.  Start on the **Landing Page**
    
2.  Click **"Go to Task Tracker"** to navigate
    
3.  Add tasks using the input form
    
4.  View your tasks in a list
    
5.  Delete tasks by clicking the ❌ button
    
6.  Use the navigation links (Header) to return home or view the About page
    

----------


## 📌 Project Roadmap

This roadmap outlines the planned development milestones for the project.  
You can track progress here — checked boxes represent completed tasks.  

---

## 🚀 Phase 1: Project Setup
- [x] Initialize project with **Vite + React**
- [x] Install ESLint & Prettier
- [x] Set up GitHub repository
- [x] Add CI/CD pipeline with GitHub Actions
- [ ] Configure project with TypeScript (optional)

---

## 🎨 Phase 2: UI & Styling
- [x] Set up **Tailwind CSS** / shadcn-ui for styling
- [x] Create reusable UI components (Button, Card, Modal, etc.)
- [ ] Add light/dark theme toggle
- [x] Ensure responsive design (mobile-first)

---

## 🛠️ Phase 3: Core Features
- [x] Implement **Task List** (Add, Edit, Delete tasks)
- [x] Add **Task Details Page**
- [ ] Implement local storage persistence
- [ ] Add search & filter functionality
- [x] Create **About Page**

---

## 📊 Phase 4: Advanced Features
- [ ] Add user authentication (JWT or Firebase)
- [ ] Sync tasks with a backend API
- [ ] Add charts for task progress
- [ ] Enable notifications & reminders

---

## 🌍 Phase 5: Deployment & Maintenance
- [x] Deploy frontend on **Vercel/Netlify**
- [ ] Add custom domain
- [ ] Write detailed documentation
- [ ] Collect feedback and iterate

---

✅ **Tip:** You (or contributors) can check/uncheck tasks directly in this file to track progress.  

    

----------

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this app, fix bugs, add features, or enhance the design — feel free to collaborate.

### How to Contribute

1. **Fork the repository**
   - Click the "Fork" button on the top right of this page.
2. **Clone your forked repo**
   ```bash
   git clone https://github.com/Talha-Tahir2001/task-tracker.git
   cd task-tracker
   ```
3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes and commit**
   ```bash
   git commit -m "Add your message"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a pull request**
   ```bash
   Go to the original repo and click "Compare & pull request".
   ```

----------

## 📄 License

This project is open-source and available under the [MIT License](https://github.com/Talha-Tahir2001/task-tracker/blob/main/LICENSE).

----------

## 👨‍💻 Author

**Talha**

Feel free to connect with me if you have any questions, suggestions, or collaboration ideas.
-   GitHub: [@Talha-Tahir2001](https://github.com/Talha-Tahir2001)
    
-   LinkedIn: [Talha Tahir](https://www.linkedin.com/in/talha-tahir2001/)
