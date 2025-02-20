# OSS Club Dashboard

## Overview
OSS Club Dashboard is an open-source project aimed at enhancing collaboration and engagement within the club. Contribute, learn, and grow together! 🚀

## Features
- **Leaderboard** - Track contributions and climb to the top with your dev skills! 🏆
- **Schedule Panel** - Stay updated on upcoming club events and sessions. 📅
- **Profile** - Showcase and explore achievements, badges, and contributions. 🔥
- **Library** - Access a collection of learning resources and materials. 📚
- **Attendance Marker** - Keep track of attendance and participation. ✅

## Tech Stack
- **Next.js 15**
- **TypeScript**
- **Firebase**
- **Supabase**
- **Google Sheets API**

## Setup and Contribution Guidelines

### Setup
1. **Fork** this repository.
2. **Clone** the forked repo to your local machine.
3. **Set up Supabase**:
   - Create an account on Supabase and start a new project.
   - Get the **Project URL** and **Public Anon Key**.
4. **Set up Firebase**:
   - Create a Firebase project and enable Authentication, Firestore, and Storage.
   - Obtain the Firebase configuration keys.
5. **Set up Google Sheets API**:
   - Create a Google Cloud project and enable the Google Sheets API.
   - Generate API credentials (Service Account Key in JSON format).
6. **Environment Variables**:
   - Create a `.env.local` file in the root directory.
   - Add the following credentials:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
     NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
     NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
     NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
     CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
     NEXT_PUBLIC_PEXELS_API_KEY=YOUR_PEXELS_API_KEY
     GEMINI_API_URL=YOUR_GEMINI_API_URL
     SPREADSHEET_ID=YOUR_SPREADSHEET_ID
     GOOGLE_PROJECT_ID=YOUR_GOOGLE_PROJECT_ID
     GOOGLE_PRIVATE_KEY_ID=YOUR_GOOGLE_PRIVATE_KEY_ID
     GOOGLE_PRIVATE_KEY=YOUR_GOOGLE_PRIVATE_KEY
     GOOGLE_CLIENT_EMAIL=YOUR_GOOGLE_CLIENT_EMAIL
     GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
     GOOGLE_AUTH_URI=YOUR_GOOGLE_AUTH_URI
     GOOGLE_TOKEN_URI=YOUR_GOOGLE_TOKEN_URI
     GOOGLE_AUTH_PROVIDER_CERT_URL=YOUR_GOOGLE_AUTH_PROVIDER_CERT_URL
     GOOGLE_CLIENT_CERT_URL=YOUR_GOOGLE_CLIENT_CERT_URL
     GOOGLE_UNIVERSE_DOMAIN=YOUR_GOOGLE_UNIVERSE_DOMAIN
     NEXT_PUBLIC_BASE_URL=YOUR_PROJECT_BASE_URL
     ```
7. **Install dependencies**:
   ```bash
   pnpm install
   ```
8. **Run the development server**:
   ```bash
   pnpm run dev
   ```
9. 🎉 You're all set to contribute!

### Contribution
- Stay in sync with the `main` branch for the latest updates.
- Create a **feature branch** and work on your changes.
- Make a **Pull Request (PR)** with a detailed description of your updates.
- The maintainers will review and merge your PR within 5-7 Days.

## For Queries and Help
📧 Email: grunfeldproject@gmail.com  
👨‍💻 Maintainer: Anish Yadav & Jenish Togadiya

