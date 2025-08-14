import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"; // Tailwind styles

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="flex gap-4 items-center mb-8">
        <img src={viteLogo} className="h-12" alt="Vite logo" />
        <img src={reactLogo} className="h-12" alt="React logo" />
      </header>
      <h1 className="text-4xl font-bold">Recipe Sharing Platform</h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome! Your Tailwind + React setup is ready.
      </p>
    </div>
  );
}

export default App;
