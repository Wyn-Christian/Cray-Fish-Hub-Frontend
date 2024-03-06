"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const getAllResources = async (searchParams) => {
  let params = new URLSearchParams(searchParams);

  const response = await fetch(
    `${process.env.SERVER_URL}/resources?${params.toString()}`,
    {
      next: { tags: ["resources"] },
      cache: "no-cache",
    }
  );

  const result = await response.json();

  return result;
};

export const getAllResourcesByUser = async (userId) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/resources/user/${userId}`,
    {
      next: { tags: ["resources"] },
    }
  );

  const result = await response.json();

  return result;
};

export const getResourcesDetails = async (id) => {
  const response = await fetch(`${process.env.SERVER_URL}/resources/${id}`, {
    next: { tags: ["resources"] },
  });

  const result = await response.json();

  if (result.status == "success") {
    return result.data[0];
  }

  return result;
};

export const createResource = async (data) => {
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

export const updateResource = async (data) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/resources/${data._id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      next: {
        tags: ["resources"],
      },
    }
  );

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("resources");
  }
  console.log(result);
  return result;
};

export const updateResourceStatus = async (currentState, formData) => {
  const data = Object.fromEntries(formData);

  const response = await fetch(
    `${process.env.SERVER_URL}/resources/${data.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("resources");
  }
  return result;
};

export const deleteResource = async (currentState, formData) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/resources/${formData.get("id")}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();

  if (result.status == "success") {
    revalidateTag("resources");
  }

  return result;
};
