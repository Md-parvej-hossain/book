import { Link } from "react-router";
import placeHolderImg from '../assets/404.jpg'
const BlogCart = ({ data }) => {

  const { cover_image, title, description, published_at, id } = data;
  
  return (
    <Link
      to={`/blog/${id}`}
      rel="noopener noreferrer"
      className="max-w-sm mx-auto group transition border-2 border-primary hover:scale-105 hover:no-underline focus:no-underline  hover:border-secondary border-opacity-30"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 "
        src={cover_image || placeHolderImg}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:text-primary">
          {title}
        </h3>
        <span className="text-xs dark:text-primary">
          {new Date(published_at).toLocaleString()}
        </span>
        <p className="dark:text-primary">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCart;