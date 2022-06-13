
import React, { useState, useEffect } from "react";
import { Axios } from "../services/Axios";
import { useParams } from "react-router-dom";
import { Box, List, Tag, ListItem, Divider } from "@chakra-ui/react";
import Pagination from '@mui/material/Pagination';
import usePagination from "../components/Pagination";



export default function User() {
    const { id } = useParams();
    let [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const PER_PAGE = 5;
    const count = Math.ceil(posts.length / PER_PAGE);
    const _DATA = usePagination(posts, PER_PAGE);

    async function fetchPosts() {
        const {data} = await Axios.get(`user/${id}/post`);
        console.log("posts",data)
        setPosts(data.data);
      };
    
       useEffect(()=> {
        fetchPosts();
      },[]);

      const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
      };


  return (
    <Box p="5">
    <Pagination className="pagination-top"
      count={count}
      size="large"
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
    />

    <List className="post-wraper" p="10" pt="3" spacing={2}>
      {_DATA.currentData().map(v => {
        return (
          <ListItem key={v.id} listStyleType="disc">
            <span className="post-text">
              {v.owner.firstName} {v.owner.lastName}{" "}
            </span>{" "}
            <div className="post-text">{v.text}</div>
            <Divider display="inline" orientation="vertical" />
            <div className="container">
              <img className="post-user" src={v.image} alt="picture"></img>
            </div>
            <Divider display="inline" orientation="vertical" />
          </ListItem>
        );
      })}
    </List>

    <Pagination className="pagination-bottom"
      count={count}
      size="large"
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
    />
  </Box>





  );
}




