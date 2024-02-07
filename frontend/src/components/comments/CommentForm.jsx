import React, { useState } from "react";

function CommentForm({
  btnLabel,
  formSubmitHandler,
  formcancelHandler = null,
  initialText = "",
}) {
  const [value, setvalue] = useState(initialText);
  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setvalue("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col items-end  rounded-lg">
          <textarea
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            rows="5"
            className="w-full focus:outline-none bg-transparent shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5"
            placeholder="Leave your comment here..."
          ></textarea>
          <div className="flex items-center gap-x-2 pt-2">
            {formcancelHandler && (
              <button
                className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2"
                onClick={formcancelHandler}
              >
                Cancel
              </button>
            )}{" "}
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2"
            >
              {btnLabel}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
