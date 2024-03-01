import { htmlToMarkdown } from "@/utils/Parser";
import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const DisplayContent = ({ content }) => {
  return (
    <Box
      sx={{
        "& p, ol": {
          m: 0,
        },
        "& br": {
          mt: 0.75,
        },
      }}
    >
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {htmlToMarkdown(content)}
      </ReactMarkdown>
    </Box>
  );
};

export default DisplayContent;
