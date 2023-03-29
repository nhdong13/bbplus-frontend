import { GradientButton } from "@/components/Button";
import IMAGES from "@/assets/images";
import MainLayout from "@/components/Layout/MainLayout";
import { H3, Typography as Span } from "@/components/Typography";
import { COLORS } from "@/utils/colors";

import {
  BookingProgressBar,
  TravelerDetailsFormContainer,
  TravelerDetailsPageContainer,
} from "./styles";
import { ContactForm } from "@/components/ContactForm";
import { FormInput } from "@/components/FormInput";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import { useGlobalModalContext } from "@/components/Modal";

export default function TravellerDetails() {
  const { showModal } = useGlobalModalContext();
  const navigate = useNavigate();

  const importantInfoContainer = (isDesktop: boolean) => {
    return (
      <div className={`important-information ${isDesktop ? "desktop-only" : ""}`}>
        <Span padding="0 0 10px 0" fontSize="20px" fontWeight="bold">
          Important Information
        </Span>
        <div className="line-info">
          <span>
            <img src={IMAGES.iconCondtionResetPassword} />
            No refunds will be issued for late check-in or early
            check-out.
          </span>
        </div>
        <div className="line-info">
          <span>
            <img src={IMAGES.iconCondtionResetPassword} />
            By clicking on the button below, I acknowledge that I have
            reviewed the <a href="#">Privacy Statement</a> and have
            reviewed and accept the{" "}
            <a href="#">Terms and Conditions</a>
          </span>
        </div>
        <div className="payment-btn">
          <GradientButton
            color={COLORS.flushOrange}
            text="Continue to secure payment"
            isSelected={true}
            maxWidth="291px"
            height="58px"
            borderRadius="17px"
            fontWeight="bold"
            handleSubmit={() => {
              navigate("/confirm");
            }}
          />
        </div>
        <div className="line-info">
          <span>
            <img src={IMAGES.iconCondtionResetPassword} />
            We use secure transmission and encrypted storage to protect
            your personal information.
          </span>
        </div>
        <div className="line-info">
          <span>
            <img src={IMAGES.iconCondtionResetPassword} />
            This payment will be processed in Fiji.
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <MainLayout>
        <TravelerDetailsPageContainer>
          <BookingProgressBar>
            <div className="progress-step step-1 passed-point">
              <div>
                <div className="progress-step-text">Holiday Options</div>
                <div className="progress-step-point"></div>
              </div>
            </div>
            <div className="progress-step step-2 passed-point">
              <div>
                <div className="progress-step-text">Customize</div>
                <div className="progress-step-point"></div>
                <svg width="366" height="10">
                  <line
                    x1="0"
                    y1="-12.5"
                    x2="-340"
                    y2="-12.5"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
            <div className="progress-step step-3 ongoing-point">
              <div>
                <div className="progress-step-text">Traveller Details</div>
                <div className="progress-step-point"></div>
                <svg width="366" height="10">
                  <line
                    x1="0"
                    y1="-12.5"
                    x2="-390"
                    y2="-12.5"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
            <div className="progress-step step-4 unpassed-point">
              <div>
                <div className="progress-step-text">Confirmation</div>
                <div className="progress-step-point"></div>
                <svg width="366" height="10">
                  <line
                    x1="0"
                    y1="-12.5"
                    x2="-340"
                    y2="-12.5"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
          </BookingProgressBar>
          <H3 padding="76.8px 0 0 42px">Traveller Details</H3>
          <TravelerDetailsFormContainer>
            <div className="detail-form">
              <ContactForm
                isPrimaryContact
                orderNumber={1}
                numberAdult={1}
                numberChild={1}
              ></ContactForm>
              <ContactForm
                orderNumber={2}
                numberAdult={1}
                numberChild={1}
              ></ContactForm>
              <div className="other-details">
                <Span fontSize="20px" fontWeight="bold" margin="0 0 30px">
                  Other Details
                </Span>
                <div className="code-container">
                  <div className="input-container">
                    <Span fontWeight="bold">Airline Reservation Code</Span>
                    <FormInput
                      label={""}
                      marginTop="0"
                      maxHeight="43px"
                      width="242px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                  <div className="input-container">
                    <Span fontWeight="bold">Promotional Code</Span>
                    <FormInput
                      label={""}
                      marginTop="0"
                      maxHeight="43px"
                      width="242px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                  <div className="input-container">
                    <Span fontWeight="bold">Agent Reference No.</Span>
                    <FormInput
                      label={""}
                      marginTop="0"
                      maxHeight="43px"
                      width="242px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                </div>
                <div className="additional-notes">
                  <Span margin="0 0 13.4px 0" fontWeight="bold" fontSize="20px">
                    Additional Notes (Optional)
                  </Span>
                  <FormInput
                    type="area"
                    label={""}
                    marginTop="0"
                    maxHeight="156px"
                    width="783px"
                    cssOptions="border-width: 1px;margin-bottom: 50px;input{padding:24px;};"
                  />
                </div>
              </div>
              <div className="payment-information">
                <p>
                  <Span fontWeight="bold">Payment Information</Span>
                  <span className="image">
                    <img src={IMAGES.iconVisa} width="45px" height="29px" />
                    <img
                      src={IMAGES.iconMastercard}
                      width="45px"
                      height="29px"
                    />
                  </span>
                </p>
                <div className="additional-info">
                  <span>
                    <img src={IMAGES.iconCondtionResetPassword} /> We use secure
                    transmission
                  </span>
                  <span>
                    <img src={IMAGES.iconCondtionResetPassword} />
                    We protect personal information
                  </span>
                </div>
                <div className="first-line-container">
                  <div className="input-container">
                    <Span fontWeight="bold">Name on Card Holder*</Span>
                    <FormInput
                      label="Name on the card"
                      marginTop="0"
                      maxHeight="43px"
                      width="309px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                  <div className="input-container">
                    <Span fontWeight="bold">Card Number*</Span>
                    <FormInput
                      label="xxxx-xxxx-xxxx-xxxx"
                      marginTop="0"
                      maxHeight="43px"
                      width="309px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                </div>

                <div className="second-line-container">
                  <div className="input-container">
                    <Span fontWeight="bold">Expiration Date*</Span>
                    <FormInput
                      label="(MM/YYYY)"
                      marginTop="0"
                      maxHeight="43px"
                      width="309px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                  <div className="input-container">
                    <Span fontWeight="bold">CVV*</Span>
                    <FormInput
                      label="xxx"
                      marginTop="0"
                      maxHeight="43px"
                      width="309px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                </div>
              </div>
              { importantInfoContainer(true) }
            </div>
            {/* *********************************************** */}
            <div className="trip-summary">
              <div className="total-price-container">
                <p>Total Price</p>
                <p className="total-price-value">FJ$X,XXX</p>
                <p>X night(s)</p>
                <div className="price-details">
                  <Span className="section">Sale Summary</Span>
                  <div className="line">
                    <p>Accommodation cost</p>
                    <span>$XXX</span>
                  </div>

                  <div className="divider" />
                  <div className="line">
                    <p>Hotel extras</p>
                    <span>$XXX</span>
                  </div>
                  <div className="divider" />
                  <div className="line">
                    <p>Transfer</p>
                    <span>$XXX</span>
                  </div>
                  <div className="divider" />
                  <div className="line">
                    <p>
                      Taxes and fees{" "}
                      <ReactSVG
                        className="icon"
                        src={IMAGES.mark}
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
                    </p>
                    <span>$XXX</span>
                  </div>
                  <div className="divider" />
                  <div className="line">
                    <p>Total Net Price</p>
                    <span>$XXX</span>
                  </div>
                  <p className="note">
                    *The total net cost is payable to BedBank Plus at the time
                    of confirmation.
                  </p>
                  <div className="divider" />
                  <div className="line">
                    <p>Agent markup</p>
                    <span>$XXX</span>
                  </div>
                  <div className="divider" />
                  <div className="line last">
                    <p>
                      Add Extra Markup{" "}
                      <ReactSVG className="icon" src={IMAGES.mark} />
                    </p>
                  </div>
                  <div className="action-bottom">
                    <div className="checkbox-group">
                      <FormControlLabel
                        control={<Checkbox title="Fixed" />}
                        label="Fixed"
                      />
                      <FormControlLabel
                        control={<Checkbox title="Percentage" />}
                        label="Percentage"
                      />
                    </div>
                    <GradientButton
                      className="btn"
                      text="XX"
                      color="#fff"
                      textColor="black"
                      width="61px"
                      height="27px"
                      fontWeight="500"
                      isSelected={true}
                    />
                  </div>
                </div>
                <div className="payment-btn desktop-only">
                  <GradientButton
                    color={COLORS.flushOrange}
                    text="Continue to secure payment"
                    isSelected={true}
                    height="62px"
                    borderRadius="17px"
                    fontWeight="bold"
                    handleSubmit={() => {
                      navigate("/confirm");
                    }}
                  />
                </div>
              </div>

              <div className="detail-form mobile-only">
                { importantInfoContainer(false) }
              </div>

              <div className="accommodation-container">
                <Span fontSize="20px" fontWeight="bold" className="sub-header">
                  Accommodation
                </Span>
                <p>
                  <Span fontWeight="bold">Hotel</Span>
                  <span>Warwick Fiji Resort & Spa</span>
                </p>
                <p>
                  <Span fontWeight="bold">Check-in</Span>
                  <span>Day | Date | Month</span>
                </p>
                <p>
                  <Span fontWeight="bold">Check-out</Span>
                  <span>Day | Date | Month</span>
                </p>
                <p>
                  <Span fontWeight="bold">Type</Span>
                  <span>
                    1 x Garden view room
                    <a href="#" onClick={() => navigate(-1)}>Change</a>
                  </span>
                </p>
                <div className="divider"></div>
                <Span className="sub-header">Hotel Extras</Span>
                <p>
                  <Span fontWeight="bold">Extra 1</Span>
                  <span>1 x Half board meal plan</span>
                </p>
                <p>
                  <Span fontWeight="bold">Extra 2</Span>
                  <span>
                    1 x 1 hour spa treatment
                    <a href="#" onClick={() => navigate(-1)}>Change</a>
                  </span>
                </p>
                <div className="divider"></div>
                <Span className="sub-header">Transfer</Span>
                <p>
                  <Span fontWeight="bold">Tewaka Fiji</Span>
                  <span>
                    Return: Airport Transfer
                    <a href="#" onClick={() => navigate(-1)}>Change</a>
                  </span>
                </p>
              </div>
            </div>


          </TravelerDetailsFormContainer>
        </TravelerDetailsPageContainer>
      </MainLayout>
    </>
  );
}
