import React from "react";
import { PhotoType } from "./types/photo";

export const Photo = (props: Omit<PhotoType, "albumId"|"id">) => {
  const { title, url, thumbnailUrl } = props;
  return (
    <>
      <p>title : {title}</p>
      <img src={`${url}`} />
      <img src={`${thumbnailUrl}`} />
    </>
  );
};
