import React from "react";
import CustomButtom from "../componenst/Custombutton";
import { useSearchParams } from "react-router-dom";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();
  const limit = Number(params.get("limit"));

  const handleLimit = () => {
    const newLimit = limit + 5;
    params.set("limit", String(newLimit));
    setParams(params);
  };
  return (
    <div className="w-full flex-center my-10">
      {limit < 30 && (
        <CustomButtom handleClick={handleLimit} title="Daha Fazla" />
      )}
    </div>
  );
};

export default ShowMore;
