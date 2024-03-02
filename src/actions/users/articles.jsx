"use server";

export const getAllPublishedArticles = async (page = 1, limit = 10) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/articles/published?page=${page}&limit=${limit}`,
    { next: { tags: ["articles"] } }
  );

  const result = await response.json();

  return result;
};
