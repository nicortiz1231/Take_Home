import bookMark from "../../assets/book_mark.png";

interface CustomBookMarkProps {
  className?: string;
  bookMarkHandler: () => void;
}

//CustomBookMark component
const CustomBookMark: React.FC<CustomBookMarkProps> = ({
  className,
  bookMarkHandler,
}) => {
  return (
    <button className={className} onClick={() => bookMarkHandler()}>
      <img src={bookMark} />
    </button>
  );
};

export default CustomBookMark;
