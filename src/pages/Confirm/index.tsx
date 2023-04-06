import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Container } from "@/styles";
import { Helmet } from "react-helmet";
import { Typography as Span, H3 } from "@/components/Typography";
import { StyledConfirmationPage, Board } from "./styles";
import { COLORS } from "@/utils/colors";
import { GradientButton } from "@/components/Button";
import { HOTEL_RULES, TAXES_AND_FEES } from "@/utils/dataTest";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";
import { useNavigate } from "react-router-dom";
import { useGlobalModalContext } from "@/components/Modal";

export default function Confirm() {
  const navigate = useNavigate();
  const { showModal } = useGlobalModalContext();
  const [showItinerary, setShowItinerary] = useState(false)

  return (
    <>
      <Helmet>
        <title>Confirmation</title>
      </Helmet>
      <MainLayout>
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <StyledConfirmationPage>
            <H3 fontSize="40px" fontWeight="bold" textAlign="center">
              Booking Confirmed
            </H3>
            <Span fontSize="28px" textAlign="center" className="sub-header">
              Your booking is confirmed. Thank you!
            </Span>
            <Board>
              <div className="booking-details">
                <div>
                  <Span
                    className="sub-header"
                    fontSize="25px"
                    fontWeight="bold"
                    color={COLORS.blueRibbon}
                  >
                    Booked Details
                  </Span>
                  <Span>
                    <Span fontWeight="bold" className="label">Guest name:</Span>{" "}
                    <Span>Mr. John Wick</Span>
                  </Span>
                  <Span>
                    <Span fontWeight="bold" className="label">Guest email address:</Span>{" "}
                    <Span>join@gmail.com</Span>
                  </Span>
                  <Span>
                    <Span fontWeight="bold" className="label">Guest Phone No:</Span>{" "}
                    <Span>(+679) 1234567</Span>
                  </Span>
                </div>
                <div>
                  <Span
                    className="sub-header"
                    fontSize="25px"
                    fontWeight="bold"
                    color={COLORS.textGreen}
                  >
                    CONFIRMED
                  </Span>
                  <Span>
                    <Span fontWeight="bold" className="label">Bedbank Plus Booking Code:</Span>{" "}
                    XXXXXXXXXXX
                  </Span>
                  <Span>
                    <Span fontWeight="bold" className="label">Booking Date:</Span> dd/mm/yyyy
                  </Span>
                  <Span>
                    <Span fontWeight="bold" className="label">Booking Agent:</Span> xxxxxxxx Agent
                  </Span>
                </div>
              </div>
              <div className="booking-summary">
                <Span
                  className="sub-header"
                  fontSize="25px"
                  fontWeight="bold"
                  color={COLORS.blueRibbon}
                >
                  Booking Summary
                </Span>
                <div className="summary">
                  <div>
                    <Span fontWeight="bold" fontSize="18px" className="label">
                      Guest Name:
                    </Span>
                    <Span>Mr. Jack Smith</Span>
                  </div>
                  <div>
                    <Span fontWeight="bold" fontSize="18px" className="label">
                      Description
                    </Span>
                    <Span>Warwick Fiji Resort</Span>
                    <Span className="small-text">
                      <Span fontWeight="bold" className="label">2 Rooms</Span>: Garden view room,
                      2 Adults, 2 Children
                    </Span>
                    <div className="small-text">
                      <Span>
                        <Span fontWeight="bold" className="label">Check-in</Span>: Fri, Mar 3,
                      </Span>
                      <Span>
                        <Span fontWeight="bold" className="label"> Check-out</Span>: Fri, Mar 12,
                      </Span>
                    </div>
                    <Span className="small-text">6-night stay</Span>
                  </div>
                  <div>
                    <Span fontWeight="bold" fontSize="18px" className="label">
                      Total Price
                    </Span>
                    <Span>$XXX</Span>
                    <Span className="taxes">
                      <Span>Taxes and fees{" "}</Span>
                      <ReactSVG
                        className="mark"
                        src={IMAGES.iconInfo}
                        onClick={() => {
                          showModal("text", {
                            title: "Taxes & fees",
                            paragraph: `This charge includes estimated amounts the travel service provider
                      (i.e. hotel, car rental company) pays for their taxes, and/or taxes
                      that we pay, to taxing authorities on your booking (including but
                      not limited to, sales, occupancy, and value added tax). This amount
                      may also include any amounts charged to us for resort fees, cleaning
                      fees, and other fees and/or a fee we, the hotel supplier and/ or the
                      site you booked on, retain as part of the compensation for our
                      and/or their services, which varies based on factors such as
                      location, the amount, and how you booked.`,
                            details: {},
                          });
                        }}
                      />
                      : $XXX
                    </Span>
                    <Span fontSize="25px" fontWeight="bold" className="big-booking-label">
                      Total Price: $XXX
                    </Span>
                    <Span className="agency-markup">
                      Agency Markup: <Span padding="0 0 0 32px">$XXX</Span>
                    </Span>
                  </div>
                </div>
              </div>
              <div className="booking-itinerary-details">
                <Span
                  className="sub-header"
                  fontSize="25px"
                  fontWeight="bold"
                  color={COLORS.blueRibbon}
                >
                  Itinerary Details
                </Span>
                <div className="itinerary">
                  <div className="form-header">
                    <Span fontSize="25px" fontWeight="bold" color="white">
                      Overview
                    </Span>{" "}
                    <GradientButton
                      className="btn"
                      isSelected
                      text={showItinerary ? "Hide" : "Show"}
                      color={COLORS.gradient2}
                      height="50px"
                      fontWeight="bold"
                      fontSize="18px"
                      borderRadius="17px"
                      margin="0"
                      handleSubmit={() => setShowItinerary(!showItinerary)}
                    />
                  </div>
                  <div style={{
                    display: showItinerary ? "block" : "none",
                  }}>
                    <div className="form-information">
                      <Span fontSize="25px" fontWeight="bold">
                        Accommodation
                      </Span>
                      <div className="line">
                        <Span>Hotel</Span>
                        <div></div>
                        <Span>Warwick Fiji Resort & Spa</Span>
                      </div>
                      <div className="line">
                        <Span>Check-in</Span>
                        <div></div>
                        <Span>Day | Date | Month</Span>
                      </div>
                      <div className="line">
                        <Span>Check-out</Span>
                        <div></div>
                        <Span>Day | Date | Month</Span>
                      </div>
                      <div className="line">
                        <Span>Room Type</Span>
                        <div></div>
                        <Span>Garden view room</Span>
                      </div>
                    </div>
                    <div className="form-information">
                      <Span fontSize="25px" fontWeight="bold">
                        Home Extras
                      </Span>
                      <div className="line">
                        <Span>Extras 1</Span>
                        <div></div>
                        <Span>Half board meal plan</Span>
                      </div>
                      <div className="line">
                        <Span>Extras 2</Span>
                        <div></div>
                        <Span>Half board meal plan</Span>
                      </div>
                    </div>
                    <div className="form-information">
                      <Span fontSize="25px" fontWeight="bold">
                        Transfer
                      </Span>
                      <div className="line">
                        <Span>Tewaka Fiji</Span>
                        <div></div>
                        <Span>Return: Airport Transfer</Span>
                      </div>
                    </div>
                    <div className="form-information">
                      <Span fontSize="25px" fontWeight="bold">
                        Tours
                      </Span>
                      <div className="line">
                        <Span>Sigatoka River Safari</Span>
                        <div></div>
                        <Span>Jet boat safari</Span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="booking-note">
                <Span
                  className="sub-header"
                  fontSize="25px"
                  fontWeight="bold"
                  color={COLORS.blueRibbon}
                >
                  Additional Notes
                </Span>
                <Span>
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </Span>
              </div>
              <div className="hotel-rules">
                <Span
                  className="sub-header"
                  fontSize="25px"
                  fontWeight="bold"
                  color={COLORS.blueRibbon}
                >
                  Hotel Rules
                </Span>
                {HOTEL_RULES.map((rule) => (
                  <div key={rule.name} className="line">
                    <Span fontWeight="600" className="label">{rule.name}</Span>
                    <Span>{rule.value}</Span>
                  </div>
                ))}
              </div>
            </Board>
            <div className="group-btn">
              <GradientButton
                className="btn"
                text="Amend booking"
                fontSize="18px"
                height="58px"
                isSelected
                color={COLORS.verdunGreen}
              />
              <GradientButton
                className="btn"
                text="Cancel booking"
                fontSize="18px"
                height="58px"
                isSelected
                color={COLORS.red2}
                handleSubmit={() => {
                  navigate("/");
                }}
              />
            </div>
          </StyledConfirmationPage>
        </Container>
      </MainLayout>
    </>
  );
}
