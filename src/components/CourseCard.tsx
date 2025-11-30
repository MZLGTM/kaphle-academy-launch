import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  students: number;
  duration: string;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  students,
  duration,
}: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
          {price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{students}+ students</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        <Link to={`/course/${id}`}>
          <Button className="w-full bg-primary text-primary-foreground hover:glow-primary">
            Learn More
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
