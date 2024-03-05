"use client";

import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Box, TextField } from "@mui/material";

const SearchField = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <Box flexGrow={[1, "unset"]}>
      <TextField
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        placeholder="Search here..."
        defaultValue={searchParams.get("search")?.toString()}
        sx={{ width: { xs: "100%", sm: 300 } }}
      />
    </Box>
  );
};

export default SearchField;
