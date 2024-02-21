const fileIcons = {
  excel: "/assets/files/ic_excel.svg",
  word: "/assets/files/ic_word.svg",
  powerpoint: "/assets/files/ic_power_point.svg",
  image: "/assets/files/ic_img.svg",
  pdf: "/assets/files/ic_pdf.svg",
  video: "/assets/files/ic_video.svg",
  file: "/assets/files/ic_file.svg",
};

export default (fileName) => {
  const extension = fileName.split(".").pop().toLowerCase();
  switch (extension) {
    case "xls":
    case "xlsx":
      return fileIcons.excel;
    case "doc":
    case "docx":
      return fileIcons.word;
    case "ppt":
    case "pptx":
      return fileIcons.powerpoint;
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return fileIcons.image;
    case "pdf":
      return fileIcons.pdf;
    case "mp4":
    case "avi":
    case "mov":
      return fileIcons.video;
    default:
      return fileIcons.file;
  }
};
