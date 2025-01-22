import earth from "../../assets/earth.png";

interface CustomInfoButtonProps {
  className?: string;
  infoHandler: () => void;
}

//CustomInfoButton component
const CustomInfoButton: React.FC<CustomInfoButtonProps> = ({
  className,
  infoHandler,
}) => {
  return (
    <button className={className} onClick={() => infoHandler()}>
   <img src={earth} width={20} />
    </button>
  );
};

export default CustomInfoButton;
