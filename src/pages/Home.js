import React, { useState, useEffect } from "react";
import { Axios } from "../services/Axios";
import { Box, List, Tag, ListItem, Divider } from "@chakra-ui/react";
import Pagination from "@mui/material/Pagination";
import usePagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let [page, setPage] = useState(1);
  let [data, setData] = useState([]);
  const PER_PAGE = 5;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);
  const navigate = useNavigate();

  async function fetchUsers() {
    const { data } = await Axios.get("/user");
    setData(data.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handleOnClick = (id) => {
    navigate(`/user/${id}`);
    console.log("click", id);
  };

  return (
    <div className="">
      <Box p="5">
        <Pagination
          className="pagination-top"
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
          <List className="users-wraper" p="10" pt="3" spacing={2}>
            {_DATA.currentData().map((user) => {
              return (
                  <ListItem className="list-space" key={user.id} listStyleType="disc">
                    <span className="user-name">
                      {" "}
                      {user.firstName} {user.lastName}{" "}
                    </span>{" "}
                    <Divider display="inline" orientation="vertical" />
                    <div className="">
                      <img className="user-image"
                        src={user.picture}
                        onClick={() => handleOnClick(user.id)}
                        alt="picture" >
                      </img>
                    </div>
                    <Divider display="inline" orientation="vertical" />
                  </ListItem>
              );
            })}
          </List>

        <Pagination
          className="pagination-bottom"
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}
