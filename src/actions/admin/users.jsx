"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const getAllUsers = async (page = 1, limit = 10) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/users?page=${page}&limit=${limit}`,
    { next: { tags: ["users"] } }
  );

  const result = await response.json();

  return result;
};

export const getUserDetail = async (id) => {
  const response = await fetch(`${process.env.SERVER_URL}/users/${id}`, {
    next: { tags: ["users"] },
  });

  const result = await response.json();

  if (result.status == "success") {
    return result.data[0];
  }
  return result;
};

export const createUser = async (currentState, formData) => {
  // console.log(cookies().get("currentUser").value);
  // console.log(currentState, formData);
  // await new Promise((res) => setTimeout(res, 1000));
  // console.log(formData);
  const new_user = Object.fromEntries(formData);

  const response = await fetch(`${process.env.SERVER_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(new_user),
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("users");
    redirect(`/admin/users/profile/${result.data[0]._id}`);
  }
};

export const editUser = async (currentState, formData) => {
  const user = Object.fromEntries(formData);

  const response = await fetch(
    `${process.env.SERVER_URL}/users/${currentState?._id}`,
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
    redirect(`/admin/users/profile/${result.data[0]._id}`);
  }
};
