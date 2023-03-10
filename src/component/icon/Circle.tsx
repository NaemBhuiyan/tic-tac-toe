import circleIcon from "../../assets/image/circle.png";
import closeIcon from "../../assets/image/close.png";

type Prop = {
  idx: number;
  icon: string;
};

const Circle = ({ idx, icon }: Prop) => {
  if (icon == "circle") {
    return <img className='icon' src={circleIcon} alt='' />;
  }
  if (icon == "cross") {
    return <img className='icon' src={closeIcon} alt='' />;
  }
  return null;
};

export default Circle;
