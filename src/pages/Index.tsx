import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import heroImage from "@/assets/hero-hotel.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import {
  ChevronRight,
  Star,
  Wifi,
  Utensils,
  Dumbbell,
  Waves,
  Sparkles,
  Shield,
} from "lucide-react";

const Index = () => {
  const rooms = [
    {
      id: "deluxe",
      name: "Deluxe Suite",
      description: "Elegant room with city views and premium amenities",
      price: 299,
      image: roomDeluxe,
      capacity: 2,
      size: 45,
    },
    {
      id: "executive",
      name: "Executive Suite",
      description: "Spacious suite with separate living area and luxury bath",
      price: 499,
      image: roomExecutive,
      capacity: 3,
      size: 65,
    },
    {
      id: "presidential",
      name: "Presidential Suite",
      description: "Ultimate luxury with grand piano and panoramic views",
      price: 999,
      image: roomPresidential,
      capacity: 4,
      size: 120,
    },
  ];

  const amenities = [
    { icon: Wifi, title: "High-Speed WiFi", description: "Complimentary throughout the resort" },
    { icon: Utensils, title: "Fine Dining", description: "World-class restaurants and bars" },
    { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art equipment 24/7" },
    { icon: Waves, title: "Infinity Pool", description: "Heated pool with ocean views" },
    { icon: Sparkles, title: "Luxury Spa", description: "Rejuvenating treatments and therapies" },
    { icon: Shield, title: "Concierge", description: "24/7 personalized service" },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely stunning! The attention to detail and service exceeded all expectations.",
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "The perfect getaway. Luxurious rooms, amazing staff, and breathtaking views.",
      date: "1 month ago",
    },
    {
      name: "Emma Williams",
      rating: 5,
      text: "A five-star experience from check-in to check-out. Will definitely return!",
      date: "3 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Hotel Resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Welcome to Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience unparalleled luxury and comfort in our world-class resort
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/rooms">
              <Button variant="hero" size="xl" className="group">
                Book Your Stay
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Button variant="luxury" size="xl">
              Explore Amenities
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Luxury Suites
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each room is meticulously designed to provide the ultimate comfort and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RoomCard {...room} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms">
              <Button variant="outline" size="lg" className="group">
                View All Rooms
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every detail crafted for your comfort and pleasure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-luxury transition-smooth border-border/50 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-smooth">
                    <amenity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Guest Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What our valued guests say about their stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-luxury transition-smooth border-border/50"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy exclusive benefits for first-time guests
          </p>
          <Link to="/rooms">
            <Button
              variant="secondary"
              size="xl"
              className="shadow-luxury hover:scale-105 transition-smooth"
            >
              Reserve Your Suite
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
