import { Container } from "@/styles";
import { Typography as Span } from "../Typography";
import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";
import { AMENITIES, FACILITIES, FAQ, HOTEL_RULES } from "../../utils/dataTest";
import Dropdown from "../Dropdown/Dropdown";
import { BREAKPOINTS } from "@/utils/breakpoints";

const StyledAboutHotel = styled.div`
  padding-bottom: 48px;
  .about-hotel__action {
    display: flex;
    flex-direction: row;
    justify-content: end;
    span {
      cursor: pointer;
    }
  }
  .hotel-result__separate {
    width: 2px;
    height: 28px;
    background-color: ${COLORS.doveGray};
    margin: 0 20px;
  }
  .select-ages__dropdown-icon {
    svg {
      path {
        stroke-width: 2px;
        fill: ${COLORS.blueFrench};
      }
    }
  }
  .MuiPaper-root {
    box-shadow: none !important;
  }
  .facilities {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .facility-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .facility-icon {
    width: 20px;
    height: 20px;
  }
  .amenities {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 30% 25% 30% auto;
    span {
    }
    ul {
      margin-top: 16px;
    }
    li {
      list-style: none;
      background-image: url(${IMAGES.iconTick});
      background-repeat: no-repeat;
      background-size: 38px 100%;
      background-position: -10px 0;
      padding-left: 30px;
      margin-bottom: 12px;
    }
  }
  .MuiButtonBase-root {
    min-height: fit-content !important;
    height: fit-content !important;
    padding: 0;
  }
  .MuiAccordionSummary-content {
    margin: 0 !important;
  }
  .MuiAccordionDetails-root {
    padding: 12px 0;
    border-top: 2px solid ${COLORS.borderGray};
    border-top-style: dotted;
  }
  .MuiPaper-root {
    margin-top: 12px !important;
  }
  .MuiPaper-root:before {
    height: 0px !important;
  }
  .rule-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;
    &:nth-child(4) {
      margin-bottom: 32px;
    }
    span {
      &:first-child {
        flex: 1;
      }
      &:last-child {
        flex: 7;
        width: 100%;
        word-break: break-all;
      }
    }
  }
  .faq {
    padding: 10px 0;
    border-bottom: 2px solid ${COLORS.borderGray};
    border-bottom-style: dotted;
    .title {
      font-size: 16px;
      color: black;
      font-weight: 600;
    }
    .MuiPaper-root {
      margin-top: 0;
    }
  }
  .faq-wrapper {
    .MuiAccordionDetails-root {
      padding: 0 !important;
    }
  }
  @media ${BREAKPOINTS.tablet} {
    padding-bottom: 15px;
    .about-hotel__action {
      padding-top: 0px;
      span {
        font-size: 14px;
        line-height: 19px;
      }
    }
    .hotel-result__separate {
      height: 19px;
    }
    .MuiAccordionDetails-root {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
    }
    .select-ages__dropdown-icon {
      svg {
        width: 26px;
        height: 16px;
        path {
          stroke-width: 0px;
          fill: ${COLORS.blueFrench};
        }
      }
    }
    .title {
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: ${COLORS.cyprus};
    }
    .facilities {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      gap: 10px;
      row-gap: 30px;
      span {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
      }
      .facility-icon path {
        fill: black !important;
      }
    }
    .amenities {
      margin-top: 30px;
      display: block;
      float: left;
      column-count: 2;
      column-fill: revert;
      & > div {
        display: inline-block;
      }
      .amenity-title {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
      }
      li {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        padding-left: 20px;
        background-size: 32px 16px;
      }
    }
    .rule-item {
      display: grid;
      grid-template-columns: 126px auto;
      margin-bottom: 0;
      span {
        font-size: 12px;
        line-height: 16px;
        &:first-child {
          font-weight: 700;
        }
      }
      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
    .hotel-rules {
      .MuiAccordionDetails-root {
        row-gap: 10px;
        padding: 10px 0 0 0;
      }
    }
    .faq-wrapper {
      & > .MuiPaper-root {
        margin-top: 30px !important;
      }
      & > .MuiPaper-root > .MuiButtonBase-root {
        margin-bottom: 0px;
        padding-bottom: 10px;
        border-bottom: 2px solid ${COLORS.borderGray};
        border-style: dotted;
      }
      .MuiAccordionDetails-root {
        border-top-style: none !important;
      }
    }
    .faq {
      padding-top: 20px !important;
      padding-top: 20px !important;
      margin-right: 4px;
      border-bottom: 2px solid ${COLORS.parkinglotGray};
      border-bottom-style: dotted;
      .title {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
      }
      .MuiPaper-root {
        margin-top: 0 !important;
      }
      .MuiButtonBase-root {
        margin-bottom: 0;
      }
      .expand-icon {
        svg {
          width: 19.4px;
          height: 12px;
          display: block;
        }
      }
    }
  }
`;

const EXPAND = ["amenities", "rules", "faq"];

interface ClickToScrollHrefOptions {
  hotelRules: string;
  customization: string;
  amenities: string;
  faq: string;
}

export default function AboutHotel({clickToScrollHrefOptions} : {clickToScrollHrefOptions: ClickToScrollHrefOptions}) {  
  const [expanded, setExpanded] = useState<string[]>(EXPAND);
  const expandAll = () => {
    setExpanded(EXPAND);
  };
  const collapseAll = () => {
    setExpanded([]);
  };
  const onExpand = (accordion: string) => {
    setExpanded((expand) => {
      if (expanded.includes(accordion)) {
        return expand.filter((item) => item !== accordion);
      }
      return [...expand, accordion];
    });
  };
  return (
    <StyledAboutHotel>
      <Container display="block" padding="0 20px 0px 20px">
        <div className="about-hotel__action">
          <Span color={COLORS.blueFrench} fontWeight="400" onClick={expandAll}>
            Expand all
          </Span>
          <div className="hotel-result__separate" />
          <Span
            color={COLORS.blueFrench}
            fontWeight="400"
            onClick={collapseAll}
          >
            Collapse all
          </Span>
        </div>
        <div className="hotel-result__right">
          <Dropdown
            id={clickToScrollHrefOptions.amenities}
            title="Amenities"
            expand={expanded.includes(EXPAND[0])}
            onExpand={() => {
              onExpand(EXPAND[0]);
            }}
            details={
              <>
                <Span className="title" fontWeight="bold">
                  Most popular facilities
                </Span>
                <div className="facilities">
                  {FACILITIES.map((item) => {
                    return (
                      <div key={item.name} className="facility-item">
                        <ReactSVG className="facility-icon" src={item.icon} />
                        <Span fontSize="16px" fontWeight="normal">
                          {item.name}
                        </Span>
                      </div>
                    );
                  })}
                </div>
                <div className="amenities">
                  {AMENITIES.map((amenity) => {
                    return (
                      <div key={amenity.name}>
                        <Span
                          className="amenity-title"
                          fontWeight="bold"
                          textAlign="center"
                        >
                          {amenity.name}
                        </Span>
                        <ul>
                          {amenity.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </>
            }
          />
          <Dropdown
            id={clickToScrollHrefOptions.hotelRules}
            title="Hotel Rules"
            className="hotel-rules"
            expand={expanded.includes(EXPAND[1])}
            onExpand={() => {
              onExpand(EXPAND[1]);
            }}
            details={
              <>
                {HOTEL_RULES.map((item) => {
                  return (
                    <div key={item.name} className="rule-item">
                      <Span fontWeight="bold">{item.name}</Span>
                      <Span>{item.value}</Span>
                    </div>
                  );
                })}
              </>
            }
          />
          <Dropdown
            id={clickToScrollHrefOptions.faq}
            className="faq-wrapper"
            title="FAQ about Warwick Fiji Beach Resort"
            expand={expanded.includes(EXPAND[2])}
            onExpand={() => {
              onExpand(EXPAND[2]);
            }}
            details={
              <>
                {FAQ.map((item) => {
                  return (
                    <Dropdown
                      key={item.question}
                      className="faq"
                      title={item.question}
                      expand={expanded.includes(EXPAND[3])}
                      onExpand={() => {
                        onExpand("");
                      }}
                      details={<Span>{item.answer}</Span>}
                      expandIcon={
                        <ReactSVG
                          className="expand-icon"
                          src={IMAGES.iconDropDownBlue}
                        />
                      }
                    />
                  );
                })}
              </>
            }
          />
        </div>
      </Container>
    </StyledAboutHotel>
  );
}
