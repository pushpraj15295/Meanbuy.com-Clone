import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const LogOut = () => {
    const {setAuth,formData} = useContext(AppContext)
  return (
    <>
      <Popover isLazy>
        <PopoverTrigger>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold"><Button>{formData.length>0 ? formData[0].email : ""}</Button></PopoverHeader>
          <PopoverBody>
          <Button onClick={()=>setAuth(false)}>LogOut</Button>
    </PopoverBody>
          <PopoverArrow />
          <PopoverCloseButton />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default LogOut;
