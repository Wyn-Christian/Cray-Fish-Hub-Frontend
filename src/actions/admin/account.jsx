"use server";

import { redirect } from "next/navigation";

const { cookies } = require("next/headers");

export const getAdminDetail = async () => {
  const userId = cookies().get("currentUser")?.value;

  let response = await fetch(`${process.env.SERVER_URL}/users/${userId}`);
  const result = await response.json();

  return result.data[0];
};

export const getCurrentUser = async () => {
  const userId = cookies().get("currentUser")?.value;
  if (!userId) {
    return null;
  }

  let response = await fetch(`${process.env.SERVER_URL}/users/${userId}`);
  const result = await response.json();

  return result.data[0];
};

export const isUserAdmin = async () => {
  const userId = cookies().get("currentUser")?.value;
  if (!userId) {
    return redirect("/");
  }
  let response = await fetch(`${process.env.SERVER_URL}/users/${userId}`);
  const result = await response.json();

  if (result.data[0].userType !== "Admin") {
    return redirect("/");
  }
};
