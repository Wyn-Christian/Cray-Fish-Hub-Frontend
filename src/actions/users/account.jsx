"use server";

const { cookies } = require("next/headers");

export const getUserDetail = async () => {
  const userId = cookies().get("currentUser")?.value;

  let response = await fetch(`${process.env.SERVER_URL}/users/${userId}`);
  const result = await response.json();

  return result.data[0];
};
