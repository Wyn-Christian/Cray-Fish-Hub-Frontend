  <Tabs
        value={statusTab}
        onChange={handleStatusTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            minHeight: 48,
            minWidth: 48,
            fontWeight: 600,
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="Draft" value="draft" />
        <Tab label="Published" value="published" />
      </Tabs>