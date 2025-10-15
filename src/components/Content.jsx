import { useLoaderData } from "react-router";
import placeHolderImg from '../assets/404.jpg';
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
const Content = () => {
  const bloContent = useLoaderData()
 const { cover_image, title, body_html, tags } = bloContent;
  return (
    <div>
      <div
        rel="noopener noreferrer"
        className=" mx-auto group transition border-2 border-neutral-200 p-2 hover:no-underline focus:no-underline "
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
         
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
            {tags.map((tag,indx) => (
              <a key={indx}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
              >
                #{tag}
              </a>
            ))}
          </div>
          <Markdown rehypePlugins={[rehypeRaw]}>
               {body_html}
          </Markdown>
       
        </div>
      </div>
    </div>
  );
};

export default Content;