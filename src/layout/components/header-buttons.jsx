import { Badge, IconButton, Stack } from "@mui/material";
import { UserIcon } from "../../assets/user-icon";
import React from "react";
import { LikeIcon } from "../../assets/like-icon";
import { BucketIcon } from "../../assets/bucket-icon";

export const HeaderButtons = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"30px"}>
      <IconButton>
        <UserIcon />
      </IconButton>
      <IconButton>
        <Badge badgeContent={4} color={"error"}>
          <LikeIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={4} color={"error"}>
           <BucketIcon />
        </Badge>
      </IconButton>
    </Stack>
  );
};
