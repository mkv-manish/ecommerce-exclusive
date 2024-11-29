# Exclusive - Next.js E-Commerce Project

## Overview
**Exclusive** is a modern, high-performance e-commerce web application built with [Next.js](https://nextjs.org/). It leverages advanced tools and libraries like Tailwind CSS, Redux Toolkit, MongoDB, and more to provide a seamless shopping experience. The platform includes robust user authentication, a dynamic product catalog, and a fully responsive design.

## Features
- **Modern UI:** Intuitive, clean, and responsive user interface designed with Tailwind CSS.
- **Authentication:** Secure user authentication using `next-auth` with JWT support.
- **State Management:** Efficient and scalable state management powered by Redux Toolkit.
- **Database Integration:** Product and user data managed with MongoDB and Mongoose.
- **Forms:** User-friendly forms powered by `react-hook-form` and Zod for validation.
- **Radix UI Components:** Enhanced interactivity with accessible UI components.
- **API Endpoints:** RESTful API endpoints for data operations and seeding.
- **Performance:** Optimized for performance and SEO using Next.js capabilities.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/exclusive.git
   cd exclusive
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env.local` file in the root directory and configure the following variables:
```env
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/exclusive
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret
```

### Running the Project
- Start the development server:
  ```bash
  npm run dev
  ```
- Build the application:
  ```bash
  npm run build
  npm start
  ```
- Seed the database:
  ```bash
  npm run seed
  ```

## Folder Structure
```
exclusive/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # Reusable components
│   ├── features/     # Redux features
│   ├── hooks/        # Custom hooks
│   ├── lib/          # Utilities and helpers
│   ├── pages/        # API routes and page components
│   ├── styles/       # Global styles
│   └── utils/        # Helper functions
└── package.json      # Project dependencies and scripts
```

## Technologies Used
- **Frontend:** Next.js, React, Tailwind CSS, Radix UI
- **State Management:** Redux Toolkit
- **Backend:** MongoDB, Mongoose, Next.js API Routes
- **Authentication:** NextAuth.js
- **Validation:** Zod, react-hook-form
- **Icons:** Lucide React

## Scripts
| Script       | Description                             |
|--------------|-----------------------------------------|
| `npm run dev` | Starts the development server          |
| `npm run build` | Builds the application for production |
| `npm start`   | Runs the production build              |
| `npm run lint` | Lints the codebase                    |
| `npm run seed` | Seeds the database                    |

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributions
Contributions are welcome! Please fork the repository and submit a pull request.

## Contact
For questions or support, reach out to [devmanish2810@gmail.com].

#Thank you


