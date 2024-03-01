"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getAllThreads = async (page = 1, limit = 10) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/forumthreads?page=${page}&limit=${limit}`,
    { next: { tags: ["threads"] } }
  );

  const result = await response.json();

  return result;
};

export const getThreadDetails = async (id) => {
  const response = await fetch(`${process.env.SERVER_URL}/forumthreads/${id}`, {
    next: { tags: ["threads"] },
  });

  const result = await response.json();

  if (result.status == "success") {
    return result.data[0];
  }

  return result;
};

export const createThread = async (currentState, formData) => {
  const new_thread = Object.fromEntries(formData);

  new_thread.author = cookies().get("currentUser").value;

  const response = await fetch(`${process.env.SERVER_URL}/forumthreads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(new_thread),
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("threads");
    redirect(`/admin/forums/details/${result.data[0]._id}`);
  }
};

export const getThreadPosts = async (threadId) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/forumthreads?page=${page}&limit=${limit}`,
    { next: { tags: ["threads"] } }
  );

  const result = await response.json();

  return result;
};

export const getAllPostsByThreads = async (id) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/forumposts/thread/${id}`,
    { next: { tags: ["threads", "posts"] } }
  );

  const result = await response.json();

  return result.data;
};

export const createPost = async (currentState, formData) => {
  const new_post = Object.fromEntries(formData);

  new_post.author = cookies().get("currentUser").value;

  const response = await fetch(`${process.env.SERVER_URL}/forumposts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(new_post),
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("posts");
  }
};

export const getAllCommentsByPost = async (id) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/comments/post/${id}`,
    { next: { tags: ["threads", "posts", "comments"] } }
  );

  const result = await response.json();

  return result.data;
};

export const createPostComment = async (currentState, formData) => {
  const new_post_comment = Object.fromEntries(formData);

  new_post_comment.author = cookies().get("currentUser").value;

  // console.log(new_post_comment);

  const response = await fetch(`${process.env.SERVER_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(new_post_comment),
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("comments");
  }
};
