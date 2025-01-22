// pages/blog/[id].tsx

import { useRouter } from 'next/router'

const blogs = [
  { id: 1, title: "My First Blog", content: "This is the content of the first blog." },
  { id: 2, title: "Next.js Tips and Tricks", content: "This is the content of the Next.js tips blog." },
  { id: 3, title: "Building with Tailwind CSS", content: "This is the content of the Tailwind CSS blog." },
]

const BlogPage = () => {
  const { query } = useRouter()
  const { id } = query

  const blog = blogs.find((blog) => blog.id.toString() === id)

  if (!blog) {
    return <div>Blog not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  )
}

export default BlogPage
