import {
  createContext,
  useContext,
  PropsWithChildren,
  useReducer,
} from "react";

type Posts = {
  id: number;
  title: string;
};

type BlogContextType = {
  blogPosts: Posts[];
  addBlogPost: () => void;
  deleteBlogPost: (id: number) => void;
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

  type ACTIONTYPE =
    | { type: "add_blogpost"; payload: string }
    | { type: "delete_blogpost"; payload: number };

  const initialState = [
    {
      id: 2,
      title: "React Native",
    },
    {
      id: 3,
      title: "React ",
    },
  ];

  const blogReducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type) {
      case "add_blogpost":
        return [
          ...state,
          { id: Math.floor(Math.random() * 99999), title: "Angular" },
        ];
      case "delete_blogpost":
        return state.filter((blogPost) => blogPost.id !== action.payload);
      default:
        return state;
    }
  };

  const [blogPosts, dispatch] = useReducer(blogReducer, initialState);

  const addBlogPost = () => {
    //setBlogPosts([...blogPosts, { title: "Typescript" }]);
    dispatch({ type: "add_blogpost", payload: "Angular" });
  };

  const deleteBlogPost = (id: number) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost, deleteBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) throw new Error("context was used outside of app");
  return context;
}
