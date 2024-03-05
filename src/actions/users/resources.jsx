"use server";

import { revalidateTag } from "next/cache";

export const getAllApprovedResources = async (page = 1, limit = 100) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/resources/approved?page=${page}&limit=${limit}`,
    {
      next: { tags: ["resources"] },
      cache: "no-cache",
    }
  );

  const result = await response.json();

  return result;
};

export const createUserResource = async (data) => {
  const response = await fetch(`${process.env.SERVER_URL}/resources`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    next: {
      tags: ["resources"],
    },
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("resources");
    return result;
  }
  return result;
};
