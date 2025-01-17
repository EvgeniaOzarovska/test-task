import React from "react";
import {styled} from "@mui/material";

export const CustomTitle = styled("h1")({
    textAlign: "center",
});

export const ActivationContent: React.FC = () => {
  return (
      <CustomTitle>Activation Page</CustomTitle>
  );
}
