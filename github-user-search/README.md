# GitHub User Search Application

A React application that allows users to search for GitHub profiles using the GitHub API. Features both basic username search and advanced search with filters for location and repository count.

## Features

- **Basic Search**: Search for users by GitHub username
- **Advanced Search**: Filter users by username, location, and minimum repository count
- **Responsive Design**: Works on desktop and mobile devices
- **User Information Display**: Shows avatar, name, bio, location, repositories, followers, and following count
- **Direct Links**: Links to actual GitHub profiles

## Technologies Used

- React 18 with Vite
- Axios for API requests
- Tailwind CSS for styling
- GitHub API v3

## Setup and Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Create the project**:
   ```bash
   npm create vite@latest github-user-search -- --template react
   cd github-user-search
   ```

2. **Install dependencies**:
   ```bash
   npm install axios
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Run the setup script above to create all files**

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to `http://localhost:5173`

## Usage

### Basic Search
1. Select "Basic Search" mode
2. Enter a GitHub username
3. Click "Search"
4. View the user's profile information

### Advanced Search
1. Select "Advanced Search" mode
2. Fill in any combination of:
   - Username (partial matches work)
   - Location
   - Minimum repository count
3. Click "Search Users"
4. Browse through the results

## Deployment to Vercel

1. **Build and test locally**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Deploy to Vercel**:
   - Go to vercel.com and sign up
   - Import your GitHub repository
   - Vercel will automatically detect and deploy

## API Rate Limits

- **Unauthenticated**: 60 requests per hour
- **Authenticated**: 5,000 requests per hour

To use authenticated requests, add your GitHub Personal Access Token to the environment variables.
