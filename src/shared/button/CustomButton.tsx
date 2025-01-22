import { Button as MuiButton } from "@mui/material";

interface CustomButtonProps {
  name: string;
  className?: string;
  handler: () => void;
}

//CustomButton component
const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  className,
  handler,
}) => {
  return (
    <MuiButton
      variant="contained"
      className={className}
      onClick={() => handler()}
    >
      {name}
    </MuiButton>
  );
};

export default CustomButton;
