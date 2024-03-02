"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getAllThreads = async (page = 1, limit = 10) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/forumthreads?page=${page}&limit=${limit}`,
    {
      next: { tags: ["threads"] },
    }
  );

  const result = await response.json();

  return result;
};

export const getAllThreadsByUser = async (userId) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/forumthreads/user/${userId}`,
    {
      next: { tags: ["threads"] },
    }
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
    next: { tags: ["threads"] },
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("threads");
    redirect(`/forums/thread/${result.data[0]._id}`);
  }
};
