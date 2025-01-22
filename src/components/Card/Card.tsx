import React from "react";
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";
import "../../styles/components/CardStyles.css";
import CustomButton from "../../shared/button/CustomButton";
import CustomBookMark from "../../shared/bookmark/CustomBookMark";
import CustomInfoButton from "../../shared/infoButton/CustomInfoButton";
interface CardProps {
  card: {
    type: string;
    logo: string;
    title: string;
    priceLabel: string;
    price: string;
    currency: string;
    change: string;
    cap: string;
    details: string;
    extra: string;
  };
}

//Bookmark handler
const bookMarkHandler = () => {
  console.log("Bookmark");
};

//View handler
const viewHandler = () => {
  console.log("View Report");
};

//View Info
const infoHandler = ()=>{
  console.log("View Info");
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <>
      {/* main card wrapper*/}
      <div className={`cardWrapper ${card.type.toLowerCase()}`}>
        {/* Upper circle*/}
        <Box className="circleContainer">
          <span className={`circleBadge ${card.type.toLowerCase()}`}>
            {card.type}
          </span>
        </Box>
        {/* Card content*/}
        <Box display="flex" justifyContent="s">
          {/* left container*/}
          <MuiCard className="" elevation={3}>
            <CustomInfoButton className={"left-logoCard"} infoHandler={()=>infoHandler()}/>
          </MuiCard>
          {/*right container*/}
          <MuiCard className="logoCard" elevation={3}>
            <Box className="logo-inner-card">
              {/*bookmark*/}
              <CustomBookMark
                className={"bookmarkIcon"}
                bookMarkHandler={() => bookMarkHandler()}
              />
              {/* card type*/}
              <span className={`cardBadge ${card.type.toLowerCase()}`}>
                {card.type}
              </span>
              {/* card main logo*/}
              <img src={card.logo} alt={card.title} className="logoImage" />
              {/* card footer*/}
              <div className="footer">
                <Typography variant="caption" className="footerText">
                  {card.title}
                </Typography>
              </div>
            </Box>
          </MuiCard>
        </Box>

        {/* Information Card (Bottom Layer) */}
        <MuiCard className="infoCard" elevation={3}>
          <CardContent className="info-card-content">
            {/* Wrapper for left and right sections */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              {/* Left Section */}
              <Box className="leftSection">
                <Typography variant="body1" className="cardPrice">
                  {card.price} <span className="currency">{card.currency}</span>
                </Typography>
                <Typography variant="body1" className="cardPrice">
                  {card.priceLabel}
                </Typography>
                <Typography variant="body2" className="cardChange">
                  {card.cap}
                </Typography>
                <Typography variant="body2" className="cardDetails">
                  {card.details}
                </Typography>
              </Box>

              {/* Right Section */}
              <Box
                className="rightSection"
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                {card?.change ? (
                  <>
                    <span className={`change `}>{card.change}</span>
                    <Typography variant="body2" className="cardDetails">
                      Change 24hrs
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="body2" className="cardDetails extra-info">
                      {card?.extra}
                    </Typography>
                  </>
                )}
                <CustomButton name="View Report" className="cardButton" handler={viewHandler} />
              </Box>
            </Box>
          </CardContent>
        </MuiCard>
      </div>
    </>
  );
};

export default Card;
