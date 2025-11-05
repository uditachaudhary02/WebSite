import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Maximize2, Wifi } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  capacity: number;
  size: number;
}

const RoomCard = ({ id, name, description, price, image, capacity, size }: RoomCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-luxury transition-smooth border-border/50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <div className="glass-effect px-4 py-2 rounded-lg">
            <span className="text-lg font-semibold text-primary">${price}</span>
            <span className="text-sm text-foreground/80">/night</span>
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl font-serif">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{capacity} Guests</span>
          </div>
          <div className="flex items-center space-x-2">
            <Maximize2 className="h-4 w-4 text-primary" />
            <span>{size} sqm</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wifi className="h-4 w-4 text-primary" />
            <span>Free WiFi</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex space-x-3">
        <Link to={`/rooms/${id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <Link to={`/rooms/${id}`} className="flex-1">
          <Button variant="default" className="w-full">
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
