import axios from "axios";
import "./css/create.css";
import { useState } from "react";

let CreatePost = () => {
  let [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  let onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/posts`, formData)
      .then((res) => {
        console.log("게시글 등록 성공", res.data);
      })
      .catch((err) => {
        console.log("게시글 등록 실패 :", err);
      });
  };

  return (
    <div className={"create-post-container"}>
      <h1 className={"create-post-title"}>게시글 작성</h1>
      <form className={"create-post-form"}>
        <div className={"form-group"}>
          <label htmlFor={"title"}>제목</label>
          <input
            name={"title"}
            id={"title"}
            type={"text"}
            placeholder={"제목을 입력하세요."}
            onChange={onChangeFormData}
          />
        </div>
        <div className={"form-group"}>
          <label htmlFor={"content"}>내용</label>
          <textarea
            name={"content"}
            id={"content"}
            placeholder={"내용을 입력하세요."}
            onChange={onChangeFormData}
          ></textarea>
        </div>
        <button
          onClick={onClickSubmit}
          type={"submit"}
          className={"submit-button"}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
