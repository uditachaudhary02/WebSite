import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-serif font-bold text-primary mb-4">
              Luxe<span className="text-secondary-foreground">Haven</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Experience unparalleled luxury and comfort in our world-class resort.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Policies</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-secondary-foreground/80">
                  123 Luxury Avenue, Paradise Island
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">reservations@luxehaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © {new Date().getFullYear()} LuxeHaven Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
