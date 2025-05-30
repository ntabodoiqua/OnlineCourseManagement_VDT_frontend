import CourseCard from "./CourseCard";

import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/html.png";
import c3 from "../assets/images/sql.jpg";
import c4 from "../assets/images/python.jpg";
import c5 from "../assets/images/java.png";
import c6 from "../assets/images/css.png";

const courses = [
  {
    img: c1,
    updatedDate: "Cập nhật: 12/08/23",
    title: "JavaScript Beginner Course",
    shortDesc:
      "Học cơ bản về JS, DOM, vòng lặp, hàm, đối tượng và project cuối khóa.",
    reviewCount: 239,
    cost: "$49.99",
  },
  {
    img: c2,
    updatedDate: "Cập nhật: 12/08/23",
    title: "HTML Complete Course",
    shortDesc:
      "Học HTML5 từ cơ bản đến nâng cao, tạo giao diện web chuyên nghiệp.",
    reviewCount: 239,
    cost: "$49.99",
  },
  {
    img: c3,
    updatedDate: "Cập nhật: 12/08/23",
    title: "SQL Beginner Course",
    shortDesc: "Từ SELECT cơ bản đến JOIN nâng cao, quản lý dữ liệu hiệu quả.",
    reviewCount: 239,
    cost: "$49.99",
  },
  {
    img: c4,
    updatedDate: "Cập nhật: 12/08/23",
    title: "Python Master Course",
    shortDesc:
      "Lập trình Python qua thực hành, xử lý tệp, web scraping, hướng OOP.",
    reviewCount: 239,
    cost: "$49.99",
  },
  {
    img: c5,
    updatedDate: "Cập nhật: 12/08/23",
    title: "Java Essentials",
    shortDesc:
      "Học Java, OOP, collection, xử lý file và giới thiệu Spring Boot.",
    reviewCount: 239,
    cost: "$49.99",
  },
  {
    img: c6,
    updatedDate: "Cập nhật: 12/08/23",
    title: "CSS Complete Course",
    shortDesc:
      "Flexbox, Grid, animation, responsive – làm chủ giao diện web hiện đại.",
    reviewCount: 239,
    cost: "$49.99",
  },
];

const PopularCoursesSection = () => (
  <section id="course">
    <h1>Khóa học phổ biến nhất</h1>
    <p>
      🎉 Hơn <strong>10,000+</strong> học viên đã tham gia và thành công
    </p>
    <div className="course-box">
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  </section>
);

export default PopularCoursesSection;
