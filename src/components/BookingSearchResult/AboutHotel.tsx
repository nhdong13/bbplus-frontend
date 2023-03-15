import { Container } from "@/styles";
import { Typography as Span } from "../Typography";
import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import IMAGES from "@/assets/images";
import { AMENITIES, FACILITIES, FAQ, HOTEL_RULES } from "../../utils/dataTest";
import Dropdown from "../Dropdown/Dropdown";

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
      width: 14px;
      height: 27.25px;
      transform: rotate(90deg);
      path {
        stroke-width: 2px;
        stroke: ${COLORS.blueRibbon};
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
      border-top-style: none !important;
      border-top: 0px;
    }
  }
`;

const EXPAND = ["amenities", "rules", "faq"];

export default function AboutHotel() {
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
      <Container display="block">
        <div className="about-hotel__action">
          <Span color={COLORS.blueRibbon} fontWeight="400" onClick={expandAll}>
            Expand all
          </Span>
          <div className="hotel-result__separate" />
          <Span
            color={COLORS.blueRibbon}
            fontWeight="400"
            onClick={collapseAll}
          >
            Collapse all
          </Span>
        </div>
        <div className="hotel-result__right">
          <Dropdown
            title="Amenities"
            expand={expanded.includes(EXPAND[0])}
            onExpand={() => {
              onExpand(EXPAND[0]);
            }}
            details={
              <>
                <Span fontWeight="bold">Most popular facilities</Span>
                <div className="facilities">
                  {FACILITIES.map((item) => {
                    return (
                      <div key={item.name} className="facility-item">
                        <ReactSVG className="facility-icon" src={item.icon} />
                        <Span fontSize="15px" fontWeight="normal">
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
            title="Hotel Rules"
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
