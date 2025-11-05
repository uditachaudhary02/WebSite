import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import { SlidersHorizontal } from "lucide-react";

const Rooms = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");

  const allRooms = [
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
    {
      id: "deluxe-2",
      name: "Deluxe King Room",
      description: "Comfortable king-sized bed with modern amenities",
      price: 249,
      image: roomDeluxe,
      capacity: 2,
      size: 40,
    },
    {
      id: "executive-2",
      name: "Executive Twin Suite",
      description: "Two separate bedrooms with shared living space",
      price: 599,
      image: roomExecutive,
      capacity: 4,
      size: 75,
    },
    {
      id: "presidential-2",
      name: "Royal Presidential Suite",
      description: "The epitome of luxury with private terrace and butler service",
      price: 1499,
      image: roomPresidential,
      capacity: 6,
      size: 180,
    },
  ];

  const filteredRooms = allRooms.filter(
    (room) => room.price >= priceRange[0] && room.price <= priceRange[1]
  );

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "size":
        return b.size - a.size;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Luxury Suites
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the perfect accommodation for your unforgettable stay
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Rooms */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="glass-effect rounded-xl p-6 mb-12 shadow-soft">
            <div className="flex items-center mb-6">
              <SlidersHorizontal className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-semibold">Filter & Sort</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={2000}
                  step={50}
                  className="mb-2"
                />
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium mb-3">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Featured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="size">Size: Largest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Reset */}
              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setPriceRange([0, 1000]);
                    setSortBy("featured");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {sortedRooms.length} of {allRooms.length} rooms
            </p>
          </div>

          {/* Room Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedRooms.map((room, index) => (
              <div
                key={room.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RoomCard {...room} />
              </div>
            ))}
          </div>

          {sortedRooms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No rooms found matching your criteria. Try adjusting the filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
