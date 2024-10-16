# Fullstack Currency Exchange Application

This project is a fullstack application that provides a currency exchange service for EUR to PLN. It consists of a NestJS backend and a Next.js frontend.

## Project Overview

The application allows users to:

1. View the current EUR to PLN exchange rate
2. Simulate a currency exchange transaction by inputting an amount in EUR

### Backend (NestJS)

The backend is responsible for:

1. Fetching and caching the current EUR to PLN exchange rate from a DUMMY API
2. Simulating currency exchange transactions
3. Storing transaction data

### Frontend (Next.js)

The frontend provides a user interface to:

1. Display the current EUR to PLN exchange rate
2. Allow users to input an amount in EUR and see the equivalent in PLN

## Project Structure

The project is divided into two main directories:

1. `server/`: Contains the NestJS backend application
2. `client/`: Contains the Next.js frontend application

## Backend (NestJS)

### Key Features

- Fetches exchange rates from a DUMMY API
- Caches exchange rates for 1 minute
- Simulates currency exchange transactions
- Stores transaction data using Prisma ORM

### Main Components

1. Currency Module (`src/currency/`)

   - `currency.controller.ts`: Defines API endpoints
   - `currency.service.ts`: Implements business logic
   - `currency.module.ts`: Configures the Currency module

2. Prisma Integration
   - Uses Prisma ORM for database operations

### API Endpoints

1. GET `/api/currency/exchange-rate`: Fetches the current EUR to PLN exchange rate
2. POST `/api/currency/simulate-transaction`: Simulates a currency exchange transaction

## Frontend (Next.js)

### Key Features

- Displays current EUR to PLN exchange rate
- Provides a form for currency conversion
- Shows conversion results

### Main Components

1. CurrencyExchangeCard (`src/app/(home)/_components/currency-exchange-card/`)

   - Manages the main UI for currency exchange
   - Includes sub-components for different parts of the UI

2. Hooks
   - `useGetExchangeRate`: Fetches the exchange rate
   - `useSimulateTransaction`: Handles transaction simulation

## Setup and Installation

### Backend (NestJS)

1. Navigate to the `server/` directory
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables (see `.env.example`)
4. Run the development server:
   ```
   npm run start:dev
   ```

### Frontend (Next.js)

1. Navigate to the `client/` directory
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables (see `.env.example`)
4. Run the development server:
   ```
   npm run dev
   ```

## Technologies Used

- Backend:

  - NestJS
  - Prisma ORM
  - PostgreSQL
  - Axios for HTTP requests
  - Cache Manager for caching

- Frontend:
  - Next.js
  - React
  - Tailwind CSS
  - Axios for API calls

## Additional Notes

- The backend uses a DUMMY API for fetching exchange rates. Ensure you have the correct API key set in the environment variables.
- The frontend is styled using Tailwind CSS and custom components.
- Both backend and frontend implement error handling and loading states for a better user experience.
