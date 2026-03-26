# AWP-HW1-partB: RPG Character Management API

This project is a simple Express.js API for managing RPG characters (Warriors, Mages, Archers, and Healers).

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Documentation

All API endpoints are prefixed with `/api`.

### 1. Create a Character
Adds a new character to the system.

- **URL:** `/api/characters`
- **Method:** `POST`
- **Body Parameters:**
  ```json
  {
    "job": "warrior" | "mage" | "archer" | "healer",
    "hp": number,
    "mp": number,
    "specialValue": number
  }
  ```
  *Note: `specialValue` corresponds to the character class's unique attribute (e.g., Agility for Archers, Mana for Mages, etc.).*

- **Response (200 OK):**
  ```json
  {
    "message": "Character created",
    "data": { "id": 1, "job": "warrior", "hp": 100, "mp": 50, ... }
  }
  ```

### 2. Get All Characters
Retrieves a list of all characters.

- **URL:** `/api/characters`
- **Method:** `GET`
- **Response (200 OK):**
  ```json
  [
    { "id": 1, "job": "warrior", "hp": 100, ... },
    { "id": 2, "job": "mage", "hp": 80, ... }
  ]
  ```

### 3. Get Character by ID
Retrieves details of a specific character.

- **URL:** `/api/characters/:id`
- **Method:** `GET`
- **Response (200 OK):**
  ```json
  { "id": 1, "job": "warrior", "hp": 100, ... }
  ```
- **Response (404 Not Found):**
  ```json
  { "message": "Character not found" }
  ```

### 4. Delete Character
Deletes a character from the system.

- **URL:** `/api/characters/:id`
- **Method:** `DELETE`
- **Response (200 OK):**
  ```json
  { "message": "Character deleted" }
  ```
- **Response (404 Not Found):**
  ```json
  { "message": "Character not found" }
  ```

## Project Structure
- `src/app.js`: Express application configuration.
- `src/server.js`: Server entry point.
- `src/controllers/`: Route controllers handling business logic.
- `src/models/`: Character class definitions.
- `src/routes/`: API route definitions.
- `src/data/`: In-memory data storage.
