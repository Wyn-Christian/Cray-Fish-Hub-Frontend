"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getAllThreads = async (searchParams) => {
  let params = new URLSearchParams(searchParams);

  const response = await fetch(
    `${process.env.SERVER_URL}/forumthreads?${params.toString()}`,
    { next: { tags: ["threads"] }, cache: "no-cache" }
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

export const createPostComment = async (currentState, formData) => {
  const new_post_comment = Object.fromEntries(formData);

  new_post_comment.author = cookies().get("currentUser").value;

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

export const deleteThread = async (currentState, formData) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/forumthreads/${formData.get("id")}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("threads");
  }

  return result;
};

export const deletePost = async (currentState, formData) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/forumposts/${formData.get("id")}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("posts");
  }

  return result;
};
