import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loaders = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <CircularProgress />
    </Stack>
  );
};

export default Loaders;
