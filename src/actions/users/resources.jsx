"use server";

import { revalidateTag } from "next/cache";

export const getAllApprovedResources = async (searchParams) => {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(
    `${process.env.SERVER_URL}/resources/approved?${params.toString()}`,
    {
      next: { tags: ["resources"], revalidate: 300 },
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
  }
  return result;
};
