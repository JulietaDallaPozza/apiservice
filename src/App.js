import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Pagination.css";
import "./User.css";

export default function App() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/`);
  };

  return (
    <div className="content-container">
      <div className="app-bar">
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", borderRadius: 2 }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              API SERVICE
            </Typography>
            <Button
              sx={{ color: "white", border: "solid  3px", color: "black" }}
              color="inherit"
              onClick={() => handleOnClick()}
            >
              User List
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}
