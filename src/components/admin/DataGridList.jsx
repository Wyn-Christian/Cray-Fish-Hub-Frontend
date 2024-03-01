"use client";

import { Box, Card, LinearProgress, Stack, Typography } from "@mui/material";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

import Image from "next/image";

const NoRowsOverlay = () => (
  <Stack height="100%" alignItems="center" justifyContent="center">
    <Box>
      <Image
        layout="responsive"
        src="/assets/no-rows-illustration.svg"
        width={300}
        height={300}
        style={{ opacity: 0.7 }}
      />
    </Box>
    <Typography variant="h6" color="#637381">
      No results found
    </Typography>
  </Stack>
);

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ gap: 2, p: 2 }}>
      <GridToolbarQuickFilter
        variant="outlined"
        sx={{ p: 0, width: { xs: "100%", md: "unset" } }}
      />
    </GridToolbarContainer>
  );
}

const DataGridList = ({ rows, columns }) => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        boxShadow: "#919eab33 0px 0px 2px 0px, #919eab33 0px 12px 24px -4px",
        borderRadius: 4,
        zIndex: 0,
        height: { xs: 800, md: 2 },
        display: { md: "flex" },
        flexGrow: { md: 1 },
        flexDirection: { md: "column" },
      }}
    >
      <DataGrid
        getRowId={(row) => row._id}
        sx={{
          borderWidth: 0,
          "& .MuiDataGrid-cell": {
            borderBottom: "1px dashed #f1f3f4",
          },
          "& .MuiDataGrid-columnHeader": {
            color: "#919eab",
            bgcolor: "#919eab1f",
          },
        }}
        rowHeight={75}
        slots={{
          loadingOverlay: LinearProgress,
          noRowsOverlay: NoRowsOverlay,
          toolbar: CustomToolbar,
        }}
        disableColumnMenu
        rows={rows}
        columns={columns}
      />
    </Card>
  );
};

export default DataGridList;
