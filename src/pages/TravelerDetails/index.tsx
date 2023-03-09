import { GradientButton } from "@/components/Button";
import IMAGES from "@/assets/images";
import MainLayout from "@/components/Layout/MainLayout";
import { H3, Typography as Span } from "@/components/Typography";
import { COLORS } from "@/utils/colors";

import {
  BookingProgressBar,
  TravellerDetailsFormContainer,
  TravellerDetailsPageContainer,
} from "./styles";
import { ContactForm } from "@/components/ContactForm";
import { FormInput } from "@/components/FormInput";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ReactSVG } from "react-svg";

export default function TravellerDetails() {
  return (
    <>
      <MainLayout>
        <TravellerDetailsPageContainer>
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
          <TravellerDetailsFormContainer>
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
                <Span margin="0 0 13.4px 0" fontWeight="bold" fontSize="20px">
                  Additional Notes (Optional)
                </Span>
                <FormInput
                  label={""}
                  marginTop="0"
                  maxHeight="156px"
                  width="783px"
                  cssOptions="border-width: 1px;margin-bottom: 50px;input{padding:24px;};"
                />
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
                    tranmission
                  </span>
                  <span>
                    <img src={IMAGES.iconCondtionResetPassword} />
                    We use secure tranmission
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
              <div className="important-information">
                <Span fontSize="20px" fontWeight="bold">
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
                    <p>
                      By clicking on the button below, I acknowledge that I have
                      reviewed the <a href="#">Privacy Statement</a> and have
                      <br />
                      reviewed and accept the{" "}
                      <a href="#">Terms and Conditions</a>
                    </p>
                  </span>
                </div>
                <div className="payment-btn">
                  <GradientButton
                    color={COLORS.flushOrange}
                    text="Continue to secure payment"
                    isSelected={true}
                    maxWidth="300px"
                    height="62px"
                    borderRadius="7.5px"
                    fontWeight="bold"
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
                      <ReactSVG className="icon" src={IMAGES.mark} />
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
                      width="53px"
                      height="27px"
                      fontWeight="500"
                      isSelected={true}
                    />
                  </div>
                </div>
                <div className="payment-btn">
                  <GradientButton
                    color={COLORS.flushOrange}
                    text="Continue to secure payment"
                    isSelected={true}
                    height="62px"
                    borderRadius="7.5px"
                    fontWeight="bold"
                  />
                </div>
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
                    1 x Garden view room<a href="#">Change</a>
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
                    1 x 1 hour spa treatment<a href="#">Change</a>
                  </span>
                </p>
                <div className="divider"></div>
                <Span className="sub-header">Transfer</Span>
                <p>
                  <Span fontWeight="bold">Tewaka Fiji</Span>
                  <span>
                    Return: Airport Transfer<a href="#">Change</a>
                  </span>
                </p>
              </div>
            </div>
          </TravellerDetailsFormContainer>
        </TravellerDetailsPageContainer>
      </MainLayout>
    </>
  );
}
