# Mini Snippet Vault - Frontend

This is the client-side (frontend) of the Mini Snippet Vault app, located in the `frontend/` directory of the monorepo. It provides a web interface to seamlessly categorize, manage, and view code snippets.

## Tech Stack
- **Next.js (App Router)**: React-based framework utilizing the modern App Router approach.
- **React (v19)**: Library for creating robust user interfaces.
- **TypeScript**: Statically typed JavaScript for enhanced safety.
- **React Query (@tanstack/react-query)**: Efficient caching, data fetching, and server state management.
- **Zustand**: Lightweight manager for global states.
- **Axios**: HTTP client for communication with the backend.
- **React-Hot-Toast**: Beautiful and simple toast notifications.
- **React-Paginate**: Accessible pagination component.
- **Shared Package (@mini-snipped-vault/shared)**: Common types and constants shared with the backend.

## Environment Variables
The application looks for environment variables in the `frontend/.env` file. Example structure:
```env
PORT=3000
NEXT_PUBLIC_BASE_URL=http://localhost:5000
```
*(Note: `NEXT_PUBLIC_BASE_URL` must point to the running backend server. The `NEXT_PUBLIC_` prefix is required for Next.js to expose the variable to the browser).*

## Running Locally
From the **root directory** of the monorepo, you can run:

```bash
# Install all dependencies (root, frontend, backend, shared)
npm install

# Build the shared package (required for types and constants)
npm run build:shared

# Start both frontend and backend development servers (uses concurrently)
npm run dev

# Or start only the frontend
npm run dev:frontend
```

## API Integration (Testing)
The frontend communicates directly with the backend API (`/notes` endpoints). 
To verify that everything connects correctly:
1. Ensure your backend server is running (use `npm run dev` or `npm run dev:backend`).
2. The UI natively triggers `GET` requests (via `react-query`) to load all notes upon visiting the main dashboard.
3. You can test submissions simply by interacting with the forms on the web interface—they trigger `POST`, `PATCH`, and `DELETE` requests depending on the user interaction.

## Build and Run in Production
To prepare the application for a production environment:
1. Build all packages from the root directory:
   ```bash
   npm run build --workspaces
   ```
2. Start the frontend server in production mode:
   ```bash
   npm run start:frontend
   ```

