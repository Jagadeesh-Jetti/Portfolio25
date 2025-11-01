import { StarBackground } from '../components/StarBackground';
import { ThemeToggle } from '../components/ThemeToggle';

export const Home = () => {
  return (
    <div className="min-h-screen">
      This is a home page
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      {/* Main content */}
      {/* Footer*/}
    </div>
  );
};
