"use server";

import { redirect } from "next/navigation";

const { cookies } = require("next/headers");

export const login = async (prevState, formData) => {
  const user_data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch(
    `${process.env.SERVER_URL}/users/authenticate/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
    }
  );

  const result = await response.json();

  if (result.status == "success") {
    // cookies().set("current_user", user)
    const oneDay = 24 * 60 * 60 * 1000;
    const expires = new Date(Date.now() + oneDay);

    cookies().set("currentUser", result.data[0]._id, {
      expires,
      httpOnly: true,
    });
  }

  return result;
};

export const logout = () => {
  cookies().set("currentUser", "");
  cookies().set("username", "");
  cookies().set("email", "");
  redirect("/");
};

export const signup = async (currentState, formData) => {
  const data = Object.fromEntries(formData);

  console.log(data);

  if (data.password !== data.repassword) {
    return {
      status: "fail",
      message: "Password does not match!",
    };
  }

  const response = await fetch(`${process.env.SERVER_URL}/users `, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
