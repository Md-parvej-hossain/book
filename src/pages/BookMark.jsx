import React, { useEffect, useState } from 'react';
import { deleatBlog, getBlogs } from '../utils';
import BlogCart from '../components/blogCart';
import EmptuState from '../components/EmptuState';

const BookMark = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storeBloge = getBlogs();
    setBlogs(storeBloge);
  }, []);
    const handaleDeleat = id => {
      deleatBlog(id);
      const storeBloge = getBlogs();
      setBlogs(storeBloge);
  };
  if (blogs.length < 1) return <EmptuState massage={ 'No BookMark Available'} address={"/blogs"} labale={'Go To Blogs'}/>;
  return (
    <div className="grid px-4 sm:px-0 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map(data => (
        <BlogCart
          handaleDeleat={handaleDeleat}
          deleable={true}
          key={data.id}
          data={data}
        ></BlogCart>
      ))}
    </div>
  );
};

export default BookMark;
