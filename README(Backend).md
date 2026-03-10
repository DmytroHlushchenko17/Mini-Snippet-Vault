# Mini Snippet Vault - Backend

This is the server-side (backend) for the Mini Snippet Vault application, located in the `backend/` directory of the monorepo. It provides an API for managing code snippets (notes).

## Tech Stack
- **Node.js & Express**: Web framework for building the REST API.
- **MongoDB**: NoSQL database for storing user data and notes.
- **Celebrate**: Middleware for validating incoming request payloads.
- **Cors**: Cross-Origin Resource Sharing.
- **Dotenv**: Centralized loading of environment variables.
- **Shared Package (@mini-snipped-vault/shared)**: Common types and constants shared with the frontend.

## Environment Variables
The application looks for environment variables in the `backend/.env` file. Example structure:
```env
PORT=5000
BASE_URL=http://localhost:5000
MONGO_URL=mongodb+srv://...
```

## Running Locally
From the **root directory** of the monorepo, you can run:

```bash
# Install all dependencies (root, frontend, backend, shared)
npm install

# Build the shared package (required for constants/types)
npm run build:shared

# Start both frontend and backend development servers (uses concurrently)
npm run dev

# Or start only the backend
npm run dev:backend
```

## API Endpoints (Testing the API)
All note endpoints are prefixed with `/notes`.

- **`GET /notes`**: Fetch a paginated list of notes.
  - **Query Params**: `page` (default 1), `perPage` (default 10), `tag`, `type`, `search`.
- **`GET /notes/:noteId`**: Fetch a specific note by ID.
- **`POST /notes`**: Create a new note.
- **`PATCH /notes/:noteId`**: Update an existing note by ID.
- **`DELETE /notes/:noteId`**: Delete a note by its ID.

## Build and Run in Production
1. Build all packages from the root directory:
   ```bash
   npm run build --workspaces
   ```
2. Start the backend server in production mode:
   ```bash
   npm run start:backend
   ```
  
