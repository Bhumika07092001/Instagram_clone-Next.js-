"use client";
import React, { useState, useEffect } from "react";
import styles from "./comment.module.css";
import { io } from "socket.io-client";

const CommentPopup = ({ setComment, Comment, setCommentList, commentList }) => {
  const [commentInput, setCommentInput] = useState("");
  const [socket, setSocket] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3001");
    setSocket(socket);
    socket.on("receive", (message) => {
      setCommentList(...commentList, message);
    });
  }, []);

  const onClose = () => {
    setComment(!Comment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment(false);
    socket.emit("comment", commentInput);
    console.log("Comment submitted:", commentInput);
    setCommentInput("");
  };

  return (
    <div className={styles.commentPopup}>
      <div className="comment-popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Write a comment</h2>
        <form>
          <input
            value={commentInput}
            onInput={(e) => {
              setCommentInput(e.target.value);
            }}
            placeholder="Write your comment..."
            required
          ></input>
          <br />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentPopup;
