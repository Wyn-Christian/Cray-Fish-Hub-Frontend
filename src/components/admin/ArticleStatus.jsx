import { Box } from "@mui/material";

const ArticleStatus = ({ value }) => {
  let color, bgcolor;
  switch (value) {
    case "draft":
      color = "#637381";
      bgcolor = "#919eab29";
      break;
    case "published":
      color = "#006c9c";
      bgcolor = "#00b8d929";
      break;
  }

  return (
    <Box
      sx={{
        height: 30,
        minWidth: 30,
        lineHeight: 0,
        cursor: "default",
        borderRadius: 1.5,
        alignItems: "center",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        textTransform: "capitalize",
        px: 1.5,
        fontSize: "0.87rem",
        fontWeight: 700,
        color,
        bgcolor,
      }}
    >
      {value}
    </Box>
  );
};

export default ArticleStatus;
