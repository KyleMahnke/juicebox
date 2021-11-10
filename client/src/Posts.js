import React, { useEffect } from "react";
import { getPosts } from "../api/posts";

export async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    const result = await response.json();
    console.log();
  } catch (error) {
    console.error(error);
  }
}
