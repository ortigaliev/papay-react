import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

export function MySettings(props: any) {
  return (
    <Stack className="my_settings_page">
      <Box className={"member_media_frame"}>
        <img
          src="/icons/user.svg"
          className="mb_image"
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
        />
        <div className="media_change_box">
          <span>Upload img</span>
          <p>Please follow these  img formats (JPG JPEG PNG)</p>
          <div className="up_del_box">
            <Button component="label" style={{ minWidth: "0" }}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Name</label>
          <input
            type="text"
            className="spec_input mb_nick"
            name="mb_nick"
            placeholder="Please enter your name..."
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="short_input">
          <label className="spec_label">Phone number</label>
          <input
            type="text"
            className="spec_input mb_phone"
            name="mb_phone"
            placeholder="Phone number"
          />
        </div>
        <div className="short_input">
          <label className="spec_label">Address</label>
          <input
            type="text"
            className="spec_input mb_address"
            name="mb_address"
            placeholder="Please enter your address..  "
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">About</label>
          <textarea

            className="spec_textarea mb_description"
            name="mb_description"
            placeholder="I am really happy to share my feeling"
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{mt: "25px"}}>
        <Button variant="contained">Save</Button>
      </Box>
    </Stack>
  );
}