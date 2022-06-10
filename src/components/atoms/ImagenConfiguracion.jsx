import React from "react";

import ImagenSanti from "../../img/imagenSanti.png";
const ImagenConfiguracion = () => {
  // styles
  const imageStyles =
    "rounded-full h-16 items-center my-5 border border-4-black hover:scale-[110%]	 duration-200 ";
  return (
    <div>
      <input type="image" src={ImagenSanti} className={imageStyles} />
    </div>
  );
};

export default ImagenConfiguracion;
