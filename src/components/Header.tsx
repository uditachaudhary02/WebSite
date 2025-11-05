import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-primary">
              Luxe<span className="text-foreground">Haven</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            <Link to="/rooms" className="text-foreground hover:text-primary transition-smooth font-medium">
              Rooms
            </Link>
            <Link to="/amenities" className="text-foreground hover:text-primary transition-smooth font-medium">
              Amenities
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/rooms">
              <Button variant="hero" size="default">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link
              to="/amenities"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="space-y-2 pt-4">
              <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full">
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </Link>
              <Link to="/rooms" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" size="default" className="w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
