"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getUserDetail = async () => {
  const userId = cookies().get("currentUser")?.value;

  let response = await fetch(`${process.env.SERVER_URL}/users/${userId}`, {
    next: { tags: ["users"] },
  });
  const result = await response.json();

  return result.data[0];
};

export const isUserLogin = () => {
  return cookies().get("currentUser")?.value;
};

export const getProfileDetail = async (id) => {
  let response = await fetch(`${process.env.SERVER_URL}/users/${id}`, {
    next: { tags: ["users"] },
  });
  const result = await response.json();

  return result.data[0];
};

export const updateUser = async (currentState, formData) => {
  const user = Object.fromEntries(formData);

  const response = await fetch(`${process.env.SERVER_URL}/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("users");
    redirect(`/profile/${result.data[0]._id}`);
  }
};
