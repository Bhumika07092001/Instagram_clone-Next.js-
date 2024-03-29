"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import CommentPopup from "../CommentSection/Comment";
import styles from "./singlepost.module.css";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const [postData, setData] = useState([]);
  const [likeStatus, setLikeStatus] = useState(false);
  const [Comment, setComment] = useState(false);
  const [commentList, setCommentList] = useState(["hello"]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleLike = () => {
    setLikeStatus(!likeStatus);
  };

  const handleComment = () => {
    setComment(!Comment);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/posts");
      setData(response.data);
      console.log("post data:", postData);
      console.log("reponse data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      {postData.map((post, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.postHead}>
            <div className={styles.profile}>
              <Image src={post.img} width={40} height={40} />
            </div>
            <h3>{post.username}</h3>
          </div>
          <div className={styles.postImage}>
            <Image src={post.img} width={718} height={300} alt="Post Image" />
          </div>
          <div className={styles.reaction}>
            <Image
              src={likeStatus ? "/favorite.png" : "/heart.png"}
              width={likeStatus ? 35 : 17}
              height={likeStatus ? 32 : 20}
              onClick={() => {
                handleLike();
              }}
              alt="Heart Icon"
            />
            <Image src="/send.png" width={17} height={20} alt="Send Icon" />
          </div>
          <div className={styles.desc}>
            <p>{post.des}</p>
            <div
              className={styles.comment}
              onClick={() => {
                handleComment();
              }}
            >
              comment....
            </div>
            {Comment ? (
              <CommentPopup
                setComment={setComment}
                Comment={Comment}
                commentList={commentList}
                setCommentList={setCommentList}
              />
            ) : null}
            <div className={styles.comment}>
              {commentList.map((value, index) => (
                <div key={index}>
                  {post.username}:{value}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SinglePost;
