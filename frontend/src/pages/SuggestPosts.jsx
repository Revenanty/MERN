import React from "react";
import { Link } from "react-router-dom";

function SuggestPosts({ className, header, posts, tags }) {
  return (
    <div
      className={`w-full  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-dark-hard md:text-lg">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2  md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              src={item.image}
              className="aspect-square object-cover rounded-lg w-1/5"
              alt=""
            />
            <div className="text-sm font-roboto text-dark-hard font-bold">
              <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                {item.title}
              </h3>
              <span className="">{item.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-roboto font-medium text-dark-hard mt-8">Tags</h2>
      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">
        {tags.map((tag) => (
          <Link
            key={tag}
            to="/"
            className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SuggestPosts;
