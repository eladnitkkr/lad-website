import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
   
  export function NavbarWithSearch() {
    return (
      <Navbar className="mx-auto my-0 max-w-screen-3xl px-12 py-3">
        <div className="flex flex-wrap items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            <img src="/nitkkr.png" alt="" className="h-24"/>
          </Typography>
            <Typography>
                <div className="text-2xl">
                  National Institute of Technology, Kurukshetra
                  </div>
            </Typography>
        </div>
      </Navbar>
    );
  }