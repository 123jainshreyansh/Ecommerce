import React from "react";

function Background({ heroCount }) {
  const baseClass = "w-1/2 h-full ml-auto object-cover";

  if (heroCount === 0) {
    return (
      <img
        src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=1169&auto=format&fit=crop"
        alt=""
        className={baseClass}
      />
    );
  } else if (heroCount === 1) {
    return (
      <img
        src="https://media.istockphoto.com/id/1325449614/photo/row-of-colorful-apparel-on-shoulders-hangers-of-t-shirts-of-retail-shop-with-other-items-on.webp"
        alt=""
        className={baseClass}
      />
    );
  } else if (heroCount === 2) {
    return (
      <img
        src="https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e"
        alt=""
        className={baseClass}
      />
    );
  } else if (heroCount === 3) {
    return (
      <img
        src="https://images.unsplash.com/photo-1445205170230-053b83016050"
        alt=""
        className={baseClass}
      />
    );
  }

  return null;
}

export default Background;
