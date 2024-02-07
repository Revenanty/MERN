import React from "react";
import MainLayout from "../components/MainLayout";
import BreadCrumbs from "../components/BreadCrumbs";
import post1 from "../assets/post1.jpg";
import { Link } from "react-router-dom";
import SuggestPosts from "./SuggestPosts";
import CommentContainer from "../components/comments/CommentContainer";
import SocialButton from "../components/SocialButton";

const breadcrumb = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article title",
    link: "/blog/1",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const postData = [
  {
    _id: "1",
    image: post1,
    title: "help children  get better eduction",
    createdAt: new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  },
  {
    _id: "2",
    image: post1,
    title: "help children  get better eduction",
    createdAt: new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  },
  {
    _id: "3",
    image: post1,
    title: "help children  get better eduction",
    createdAt: new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  },
  {
    _id: "4",
    image: post1,
    title: "help children  get better eduction",
    createdAt: new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  },
];

function ArticleDetail() {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadcrumb}></BreadCrumbs>
          <img className="rounded-xl w-full" src={post1} alt="" />
          <Link
            className="text-primary text-sm md:text-lg font-roboto inline-block mt-4"
            to="/blog?category=selectedCatgory"
          >
            Eduction
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-lg">
            Help children get better eduction
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              placeat maiores odit magni quibusdam fugit repellendus
              reprehenderit, repudiandae exercitationem consequuntur iste error
              dicta molestiae debitis, cumque excepturi, deleniti assumenda?
              Molestiae? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Illum, voluptatum cum! Quia deserunt provident soluta illum
              assumenda corrupti est laudantium id molestias, iure iste vero
              fuga numquam natus, sed repellat.
            </p>
          </div>
          <CommentContainer
            className={"mt-10"}
            logginedUserId="a"
          ></CommentContainer>
        </article>
        <div>
          <div className="">
            <SuggestPosts
              header="Lasted Article"
              posts={postData}
              tags={tagsData}
              className="mt-8 lg:mt-0 lg:max-w-xs"
            ></SuggestPosts>
          </div>
          <div className="mt-7">
            <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
              Share on:
            </h2>
            <SocialButton
              url={encodeURI(
                "https://github.com/mohammadrz003/moonfo-youtube/blob/mern-stack-blog-frontend/src/pages/articleDetail/ArticleDetailPage.jsx"
              )}
              title={encodeURIComponent(
                "Client-side and Server-side explanation"
              )}
            ></SocialButton>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ArticleDetail;
