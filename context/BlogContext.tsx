import { createContext, useContext, PropsWithChildren, useState } from "react";

type Posts = {
  title: string;
};

type BlogContextType = {
  blogPosts: Posts[];
  addBlogPost: () => void;
};

export const BlogContext = createContext<BlogContextType | undefined>(
  undefined
);

export function BlogProvider({ children }: PropsWithChildren<{}>) {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "React Native",
    },
    {
      title: "React",
    },
  ]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: "Typescript" }]);
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) throw new Error("context was used outside of app");
  return context;
}
