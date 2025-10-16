
import toast from 'react-hot-toast';
export const getBlogs = () => {
  let blogs = [];
  const storeBlogs = localStorage.getItem('blogs');
  if (storeBlogs) {
    blogs = JSON.parse(storeBlogs);
  }
  return blogs;
};


//save

export const saveBlog = (blog) => {
  let blogs = getBlogs()
  const isExost =blogs.find(b=>b.id ===blog.id)
  if (isExost) {
    return toast.error("Already Bookmarked")
  }
  blogs.push(blog);
  localStorage.setItem('blogs', JSON.stringify(blogs))
  toast.success("Blug Bookmarked Successfully")
}

//deleat

export const deleatBlog = id => {
  let blogs = getBlogs()
  const remaining = blogs.filter(b => b.id !== id)
  localStorage.setItem('blogs',JSON.stringify(remaining))
  toast.success('Blug Bookmarked Successfully');
}
