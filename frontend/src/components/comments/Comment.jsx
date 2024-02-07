import React from "react";
import postProfile from "../../assets/post-profile.svg";
import { GoPencil } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import CommentForm from "./CommentForm";

function Comment({
  comment,
  logginedUserId,
  setaffectedComment,
  affectedComment,
  addComment,
  parentId = null,
  updateComment,
  delectComment,
  replies,
}) {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongtoUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;

  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={postProfile}
        alt=""
        className="w-9 h-9 object-cover rounded-full"
      />

      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {!isEditing && (
          <p className="font-opensans mt-3 text-dark-light">{comment.desc}</p>
        )}

        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formcancelHandler={() => setaffectedComment(null)}
            initialText={comment.desc}
          ></CommentForm>
        )}
        <div className="flex items-center gap-x-6  text-dark-light font-roboto my-3">
          {isUserLoggined && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setaffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FaRegMessage className="w-4 h-auto"></FaRegMessage>
              <span className="text-sm">Reply</span>
            </button>
          )}

          {commentBelongtoUser && (
            <>
              <button
                onClick={() =>
                  setaffectedComment({ type: "editing", _id: comment._id })
                }
                className="flex items-center space-x-2"
              >
                <GoPencil className="w-4 h-auto"></GoPencil>
                <span className="text-sm">Edit</span>
              </button>
              <button
                onClick={() => delectComment(comment._id)}
                className="flex items-center space-x-2"
              >
                <RiDeleteBin6Line className="w-4 h-auto"></RiDeleteBin6Line>
                <span className="text-sm">Delect</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formcancelHandler={() => setaffectedComment(null)}
          ></CommentForm>
        )}

        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setaffectedComment={setaffectedComment}
                comment={reply}
                delectComment={delectComment}
                logginedUserId={logginedUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              ></Comment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
