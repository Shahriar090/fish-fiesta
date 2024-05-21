import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
const Stars = ({ rating }: { rating: number }) => {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return <div className="flex items-center text-green-500">{starRating}</div>;
};

export default Stars;
