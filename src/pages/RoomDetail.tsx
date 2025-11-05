import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import { Users, Maximize2, Wifi, Tv, Coffee, Bath, Wind, Shield, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const RoomDetail = () => {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");

  const roomData: Record<string, any> = {
    deluxe: {
      name: "Deluxe Suite",
      description: "Experience refined elegance in our Deluxe Suite, featuring contemporary design and city views.",
      price: 299,
      image: roomDeluxe,
      capacity: 2,
      size: 45,
      features: [
        "King-size bed with premium linens",
        "Marble bathroom with rain shower",
        "City skyline views",
        "Work desk with ergonomic chair",
        "Mini bar and coffee maker",
        "Smart TV with streaming services",
      ],
    },
    executive: {
      name: "Executive Suite",
      description: "Spacious luxury awaits in our Executive Suite with separate living area and premium amenities.",
      price: 499,
      image: roomExecutive,
      capacity: 3,
      size: 65,
      features: [
        "Separate living room and bedroom",
        "King-size bed with premium linens",
        "Luxury marble bathroom with bathtub",
        "Private balcony",
        "Dining area for 4",
        "Espresso machine and wine fridge",
      ],
    },
    presidential: {
      name: "Presidential Suite",
      description: "The epitome of luxury with panoramic views, grand piano, and unmatched elegance.",
      price: 999,
      image: roomPresidential,
      capacity: 4,
      size: 120,
      features: [
        "Grand piano in living room",
        "Master bedroom with walk-in closet",
        "Two luxury bathrooms",
        "Private terrace with city views",
        "Full kitchen and dining for 8",
        "Personal butler service",
      ],
    },
  };

  const room = roomData[id || "deluxe"];

  const amenities = [
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Tv, label: "Smart TV" },
    { icon: Coffee, label: "Coffee Maker" },
    { icon: Bath, label: "Luxury Bath" },
    { icon: Wind, label: "Air Conditioning" },
    { icon: Shield, label: "Safe" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            {" / "}
            <Link to="/rooms" className="hover:text-primary transition-smooth">Rooms</Link>
            {" / "}
            <span className="text-foreground">{room.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Room Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-luxury">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Room Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{room.name}</h1>
                <p className="text-xl text-muted-foreground mb-6">{room.description}</p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-foreground/80">Up to {room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground/80">{room.size} sqm</span>
                  </div>
                </div>

                {/* Price */}
                <div className="glass-effect rounded-xl p-6 inline-block">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-primary">${room.price}</span>
                    <span className="text-xl text-foreground/60">/night</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Room Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {room.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <amenity.icon className="h-5 w-5 text-primary" />
                        <span className="text-foreground/80">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-32 shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Book Your Stay</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Check-in Date */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Check-in Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Check-out Date */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Check-out Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          disabled={(date) => date < (checkIn || new Date())}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Guests</label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Total Price */}
                  {checkIn && checkOut && (
                    <div className="border-t pt-6">
                      <div className="flex justify-between mb-4">
                        <span className="text-foreground/80">
                          ${room.price} x {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights
                        </span>
                        <span className="font-semibold">
                          ${room.price * Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))}
                        </span>
                      </div>
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary">
                          ${room.price * Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  <Button variant="hero" size="lg" className="w-full">
                    Reserve Now
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Free cancellation up to 24 hours before check-in
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RoomDetail;
