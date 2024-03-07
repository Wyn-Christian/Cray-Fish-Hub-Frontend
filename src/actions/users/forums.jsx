"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getAllThreads = async (searchParams) => {
  const params = new URLSearchParams(searchParams);

  const response = await fetch(
    `${process.env.SERVER_URL}/forumthreads?${params.toString()}`,
    {
      next: { tags: ["threads"], revalidate: 300 },
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

export const createThread = async (data) => {
  data.author = cookies().get("currentUser").value;

  const response = await fetch(`${process.env.SERVER_URL}/forumthreads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    next: { tags: ["threads"] },
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("threads");
  }

  return result;
};
