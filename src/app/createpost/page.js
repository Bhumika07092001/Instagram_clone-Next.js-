"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./createpost.module.css";

const CreatePost = () => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file.name);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const SubmitData = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/posts",
        data
      );
      console.log("Submitted:", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      img: image,
      des: caption,
      name: "rahul",
    };
    console.log("image path", image);
    router.push("/");
    SubmitData(postData);
    setImage(null);
    setCaption("");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="caption">Caption:</label>
          <textarea
            id="caption"
            value={caption}
            onChange={handleCaptionChange}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
