import React from "react";

const Headcompo = ({img, text1, text2, style}) => {
  return (
    <div className="flex items-center gap-1">
      <img src={img} alt="" />
      <div className="flex flex-col">
        <span className="text-[#8B8B8B] font-medium text-xl ">{text1}</span>
        <span className={style}>{text2}</span>
      </div>
    </div>
  );
};

export default Headcompo;
