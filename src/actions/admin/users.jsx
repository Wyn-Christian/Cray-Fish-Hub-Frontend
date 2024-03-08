"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const getAllUsers = async (page = 1, limit = 100) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/users?page=${page}&limit=${limit}`,
    { next: { tags: ["users"] }, cache: "no-cache" }
  );

  const result = await response.json();

  return result;
};

export const getUserDetail = async (id) => {
  const response = await fetch(`${process.env.SERVER_URL}/users/${id}`, {
    cache: "no-store",
    next: { tags: ["users"] },
  });

  const result = await response.json();

  if (result.status == "success") {
    return result.data[0];
  }
  return result;
};

export const createUser = async (currentState, formData) => {
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

export const editUser = async (data) => {
  const response = await fetch(`${process.env.SERVER_URL}/users/${data?._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("users");
    redirect(`/admin/users/profile/${result.data[0]._id}`);
  }
};

export const adminOverview = async () => {
  const response = await fetch(
    `${process.env.SERVER_URL}/users/admin-overview`,
    { next: { tags: ["users", "resources", "articles"] } }
  );

  const result = await response.json();

  return result?.data;
};
