"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getUserDetail = async () => {
  const userId = cookies().get("currentUser")?.value;

  if (!userId) {
    return null;
  }

  let response = await fetch(`${process.env.SERVER_URL}/users/${userId}`, {
    cache: "no-store",
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
    cache: "no-store",
    next: { tags: ["users"] },
  });
  const result = await response.json();

  return result.data[0];
};

export const updateUser = async (data) => {
  const response = await fetch(`${process.env.SERVER_URL}/users/${data._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("users");
  }
  return result;
};

export const changePassword = async (currentState, formData) => {
  const user = Object.fromEntries(formData);

  if (user.new_password !== user.repassword) {
    return {
      status: "fail",
      message: "Password does not match!",
    };
  }

  const response = await fetch(
    `${process.env.SERVER_URL}/users/${user.id}/password`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("users");
  }

  return result;
};
