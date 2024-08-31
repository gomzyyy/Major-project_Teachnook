import "./product-overview.css";
import FeatureBox from "./feature-box/feature-box";
import { Link } from "react-router-dom";

export const Overview = ({ data }) => {
  const features = data.features;

  return (
    <div className="overview-container" id={`${data.id}`}>
      <div className="side side1">
        <h1 className="product-label-home">Introduction to {data.name}</h1>
        <div className="product-paragraph-home">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora
          fuga esse. Error nulla facere totam. Quam itaque porro minus sit,
          commodi rem eius ipsam maiores molestias exercitationem similique
          soluta? Cum nisi quae tempora voluptates repudiandae, ex similique
          voluptas blanditiis mollitia illum unde officiis quo, obcaecati non
          tenetur aperiam rem quisquam atque error magni voluptatum rerum! Iure
          veniam consectetur nihil. Tempora, enim. Numquam officiis doloribus ea
          id quam exercitationem, fugit error vitae, excepturi accusamus cumque
          inventore eaque quisquam quos labore aut nisi corporis delectus,
          debitis possimus non? Inventore, nesciunt delectus.
        </div>
        <Link className="Link" to="/book-Ev">
          <div className="book-btn-home">Book {data.name}</div>
        </Link>
      </div>
      <div className="side side2">
        <div className="overview-image-home">
          <img src={`./${data.image}`} />
        </div>
        <FeatureBox val={features} />
      </div>
    </div>
  );
};
