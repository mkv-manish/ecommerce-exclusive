import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                    return <Star key={i} className="text-yellow-400 fill-current h-5" />;
                } else if (i === fullStars && hasHalfStar) {
                    return <StarHalf key={i} className="text-yellow-400 fill-current h-5" />;
                } else {
                    return <Star key={i} className="text-gray-300 h-5" />;
                }
            })}
        </div>
    );
};

export default StarRating;