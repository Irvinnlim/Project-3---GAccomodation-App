import React from "react";
import Image from "./Image";

export default function PlaceImg({ place, index, className = null }) {
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }

  return <Image className={className} src={place.photos[0]} alt="" />;
}
