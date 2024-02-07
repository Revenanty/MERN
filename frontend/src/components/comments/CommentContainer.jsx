import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

function CommentContainer({ className, logginedUserId }) {
  const [comments, setComment] = useState([]);
  const [affectedComment, setaffectedComment] = useState(null);
  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComment(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnuser = null) => {
    const newComment = {
      _id: "10",
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnuser,
      createdAt: new Date().toISOString(),
    };
    setComment((curstate) => {
      return [...curstate, newComment];
    });
    setaffectedComment(null);
  };

  const mainComments = comments.filter((comment) => comment.parent === null);

  const updateCommentHandler = (value, commentId) => {
    const updateComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return { ...comment, desc: value };
      }
      return comments;
    });
    setComment(updateComments);
    setaffectedComment(null);
  };

  const delectCommentHandler = (commentId) => {
    const updatedComment = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setComment(updatedComment);
  };

  const getRepliedHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel={"Sent"}
        formSubmitHandler={(value) => addCommentHandler(value)}
      ></CommentForm>
      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setaffectedComment={setaffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            delectComment={delectCommentHandler}
            replies={getRepliedHandler(comment._id)}
          ></Comment>
        ))}
      </div>
    </div>
  );
}

export default CommentContainer;
