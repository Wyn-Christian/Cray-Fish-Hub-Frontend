export const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/upload/image`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  if (result.status === "fail") {
    enqueueSnackbar("Upload failed.", { variant: "fail" });
    return null;
  }
  return result.data[0].path;
};

export const uploadDocuments = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("documents", file, file.name);
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/upload/documents`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  if (files.status === "fail") {
    enqueueSnackbar("Upload failed.", { variant: "fail" });
    return null;
  }
  return result.data;
};
