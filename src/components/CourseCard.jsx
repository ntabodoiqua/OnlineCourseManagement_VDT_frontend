import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({
  img,
  updatedDate,
  title,
  shortDesc,
  reviewCount,
  cost,
}) => (
  <div className="courses">
    <img src={img} alt={title} />
    <div className="details">
      <p className="updated-date">{updatedDate}</p>
      <h6>{title}</h6>
      <p className="short-desc">{shortDesc}</p>
      <div className="star-rating">
        <div className="stars">
          {[...Array(5)].map((_, idx) => (
            <FontAwesomeIcon key={idx} icon={faStar} className="i" />
          ))}
        </div>
        <p>({reviewCount} đánh giá)</p>
      </div>
    </div>
    <div className="cost">{cost}</div>
  </div>
);

export default CourseCard;
