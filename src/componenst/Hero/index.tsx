import CustomButtom from "../Custombutton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className=" flex-1 padding-x pt-36 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="hero__subtitle text-gray-200">
          Altın standartta hismetler unutulmaz bir yolculupa hazır mısın? Araç
          kirallaam deneyimi Altın Seçenekleri ile taçlandırılarak her anını
          özel kılabilirsin
        </p>
        <CustomButtom title="Arabaları Keşfet" designs="mt-10" />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          src="./../../../hero.png"
          alt=""
          width={700}
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
