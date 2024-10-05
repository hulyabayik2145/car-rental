import React, { useState } from "react";
import CustomButtom from "../Custombutton";
import CardInfo from "./CardInfo";
import { motion } from "framer-motion";
import DetailModel from "./DetailModel";
import { CarType } from "../../types";
import { generateImage } from "../../utils";
type CardProps = {
  car: CarType;
};
const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="car-card group"
    >
      {/* arabanın ismi */}
      <h2 className="car-card__content-title">
        {car.make}
        {car.model}
      </h2>
      {/* Fiyat alanı */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">₺</span>
        {Math.round(Math.random() * 5000) + 500}
        <span className="text-[14px] self-end font-medium">/gün</span>
      </p>
      {/* resim Alanı */}
      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          alt="car-pic"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Alt kısım */}
      <div className="relative flex w-full mt-2 text-gray">
        <div className="group-hover:invisible flex justify-between border w-full">
          <CardInfo title={"Otomatik"} icon="/public/steering-wheel.svg" />
          <CardInfo title="RWD" icon="/public/tire.svg" />
          <CardInfo title="MRG" icon="/public/gas.svg" />
        </div>
        <div className="car-card__btn-container">
          <CustomButtom
            title="Daha Fazla"
            designs="w-full py-[16px]"
            rIcon="/public/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <DetailModel
        car={car}
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
      />
    </motion.div>
  );
};

export default Card;
