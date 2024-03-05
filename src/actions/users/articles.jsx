"use server";

export const getAllPublishedArticles = async (searchParams) => {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(
    `${process.env.SERVER_URL}/articles/published?${params.toString()}`,
    { next: { tags: ["articles"] } }
  );

  const result = await response.json();

  return result;
};
