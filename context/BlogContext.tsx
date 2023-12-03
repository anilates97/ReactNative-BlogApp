import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useReducer,
} from "react";

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
  // const [blogPosts, setBlogPosts] = useState([
  //   {
  //     title: "React Native",
  //   },
  //   {
  //     title: "React",
  //   },
  // ]);

  type ACTION_TYPE = { type: "add_blogpost"; payload: "Angular" };

  const initialState = [
    {
      title: "React Native",
    },
    {
      title: "React ",
    },
  ];

  const blogReducer = (state: typeof initialState, action: ACTION_TYPE) => {
    switch (action.type) {
      case "add_blogpost":
        return [...state, { title: "Angular" }];
      default:
        return state;
    }
  };

  const [blogPosts, dispatch] = useReducer(blogReducer, initialState);

  const addBlogPost = () => {
    //setBlogPosts([...blogPosts, { title: "Typescript" }]);
    dispatch({ type: "add_blogpost", payload: "Angular" });
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
