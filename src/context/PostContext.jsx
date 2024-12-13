import { createContext, useState } from "react";

// Array dei post
const posts = [
  {
    id: 1,
    title: "Ciambellone",
    content: "Ciambellone ripieno.",
    image: "/images/ciambellone.jpeg",
    tags: ["soffice", "ripieno"],
  },
  {
    id: 2,
    title: "Cracker Barbabietola",
    content: "Cracker alla barbabietola.",
    image: "/images/cracker_barbabietola.jpeg",
    tags: ["viola", "croccante"],
  },
  {
    id: 3,
    title: "Pane Fritto",
    content: "Pane fritto e dolce.",
    image: "/images/pane_fritto_dolce.jpeg",
    tags: ["fritto", "dolce"],
  },
  {
    id: 4,
    title: "Pasta Barbabietola",
    content: "Pasta alla barbabietola.",
    image: "/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "barbabietola"],
  },
  {
    id: 5,
    title: "Torta Paesana",
    content: "Torta di latte.",
    image: "/images/torta_paesana.jpeg",
    tags: ["latte", "torta"],
  },
];

// Crea il contesto
export const PostsContext = createContext();

// Crea il provider
export function PostsProvider({ children }) {
  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}
