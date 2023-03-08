import { GradientButton } from "@/components/Button";
import Select from "@/components/Select";
import IMAGES from "@/assets/images";
import MainLayout from "@/components/Layout/MainLayout";
import BookingSearchResult from "@/components/BookingSearchResult";
import HorizontalContainer from "@/components/Layout/HorizontalContainer";
import { CarouselProvider } from "pure-react-carousel";
import { hotels } from "@/utils/tempData";
import CarouselSlider from "@/components/Carousel/index";
import { H3, H4, H5 } from "@/components/Typography";
import { COLORS } from "@/utils/colors";

import {
  BookingProgressBar,
  TravellerDetailsFormContainer,
  TravellerDetailsPageContainer,
} from "./styles";
import { ContactForm } from "@/components/ContactForm";
import { FormInput } from "@/components/FormInput";

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
                <p>Other Details</p>
                <div className="code-container">
                  <div className="input-container">
                    <p>Airline Reservation Code</p>
                    <FormInput
                      label={""}
                      marginTop="0"
                      maxHeight="43px"
                      width="242px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                  <div className="input-container">
                    <p>Promotional Code</p>
                    <FormInput
                      label={""}
                      marginTop="0"
                      maxHeight="43px"
                      width="242px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                  <div className="input-container">
                    <p>Agent Reference No.</p>
                    <FormInput
                      label={""}
                      marginTop="0"
                      maxHeight="43px"
                      width="242px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                </div>
                <p>Additional Notes (Optional)</p>
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
                  Payment Information
                  <span>
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
                    <p>Name on Card Holder*</p>
                    <FormInput
                      label="Name on the card"
                      marginTop="0"
                      maxHeight="43px"
                      width="309px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                  <div className="input-container">
                    <p>Card Number*</p>
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
                    <p>Expiration Date*</p>
                    <FormInput
                      label="(MM/YYYY)"
                      marginTop="0"
                      maxHeight="43px"
                      width="309px"
                      cssOptions="border-width: 1px;input{padding:24px;};"
                    />
                  </div>
                  <div className="input-container">
                    <p>CVV*</p>
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
                <p>Important Information</p>
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
                  <p>Sale Summary</p>
                  <p>
                    Accommodation cost<span>$XXX</span>
                  </p>
                  <div className="divider" />
                  <p>
                    Hotel extras<span>$XXX</span>
                  </p>
                  <div className="divider" />
                  <p>
                    Transfer<span>$XXX</span>
                  </p>
                  <div className="divider" />
                  <p>
                    Taxes and fees<span>$XXX</span>
                  </p>
                  <div className="divider" />
                  <p>
                    Total Net Price<span>$XXX</span>
                  </p>
                  <p>
                    *The total net cost is payable to BedBank Plus at the time
                    of confirmation.
                  </p>
                  <div className="divider" />
                  <p>
                    Agent markup<span>$XXX</span>
                  </p>
                  <div className="divider" />
                </div>
                <div className="payment-btn">
                  <GradientButton
                    color={COLORS.flushOrange}
                    text="Continue to secure payment"
                    isSelected={true}
                    height="62px"
                    borderRadius="7.5px"
                  />
                </div>
              </div>
              <div className="accommodation-container">
                <p className="sub-header">Accommodation</p>
                <p>
                  <span>Hotel</span>
                  <span>Warwick Fiji Resort & Spa</span>
                </p>
                <p>
                  <span>Check-in</span>
                  <span>Day | Date | Month</span>
                </p>
                <p>
                  <span>Check-out</span>
                  <span>Day | Date | Month</span>
                </p>
                <p>
                  <span>Type</span>
                  <span>
                    1 x Garden view room<a href="#">Change</a>
                  </span>
                </p>
                <div className="divider"></div>
                <p className="sub-header">Hotel Extras</p>
                <p>
                  <span>Extra 1</span>
                  <span>1 x Half board meal plan</span>
                </p>
                <p>
                  <span>Extra 2</span>
                  <span>
                    1 x 1 hour spa treatment<a href="#">Change</a>
                  </span>
                </p>
                <div className="divider"></div>
                <p className="sub-header">Transfer</p>
                <p>
                  <span>Tewaka Fiji</span>
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
