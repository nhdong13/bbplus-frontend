import { useState } from "react"
import moment from "moment";
import styled from "styled-components";
import { COLORS } from "@/utils/colors";
import { isMobileResponsive } from "@/utils/constant";
import { BREAKPOINTS } from "@/utils/breakpoints";
import { GradientButton } from "../Button";
import { Typography as Span } from "../Typography";

interface IListDays {
  events?: React.ReactNode;
}

export default function ListDays({ events }: IListDays) {
  const [currentDate, setCurrentDate] = useState(moment())
  const isMobile = isMobileResponsive()

  function getDaysArrayByMonth(currentDate: any): Array<any> {
    const daysInMonth = currentDate.daysInMonth()
    const arrDays = []

    for (let index = 0; index < daysInMonth; index++) {
      const current = moment(currentDate).date(index + 1)
      arrDays.push(current)
    }

    return arrDays;
  }

  const renderButtonGroup = () => (
    <WrapperButton>
      <GradientButton
        isSelected
        text="Previous Month"
        fontSize="14px"
        height={isMobile ? "39px" : "62px"}
        borderRadius={isMobile ? "5px" : "17px"}
        color={COLORS.gradient2}
        borderGradient={COLORS.gradient2}
        margin={isMobile ? "initial" : "0px 15px 0px 0px"}
        fontWeight={"700"}
        textPadding="10px"
        handleSubmit={() => setCurrentDate(moment(currentDate).subtract(1, 'months'))}
      />
      <GradientButton
        isSelected
        text="Next Month"
        fontSize="14px"
        height={isMobile ? "39px" : "58px"}
        borderRadius={isMobile ? "5px" : "17px"}
        borderWidth={isMobile ? "1px" : "2px"}
        textColor={isMobile ? COLORS.blueFrench : COLORS.blueRibbon}
        color={COLORS.white}
        borderGradient={COLORS.white}
        borderColor={COLORS.greenBlue}
        fontWeight={"700"}
        textPadding="10px"
        handleSubmit={() => setCurrentDate(moment(currentDate).add(1, 'months'))}
      />
    </WrapperButton>
  )

  console.log('currentDate', currentDate)

  return (
    <StyledListDays>
      { renderButtonGroup() }

      <p className="title">{ currentDate.format('MMMM YYYY') }</p>

      <List>
        {getDaysArrayByMonth(currentDate).map(day => {
          const dayNumber = +day.format('DD')

          return (
            <div className="item">
              <div className="title">
                {[3, 9].includes(dayNumber) && (
                  <Span className="warning">1 room left</Span>
                )}
                <span>
                  {day.format('ddd D')}
                </span>
              </div>
              <div className="content">
                <Span className="first-line">
                  {(dayNumber < 9 || dayNumber >= 27) && (
                    "SOLD OUT"
                  )}
                  {(dayNumber >= 9 && dayNumber < 24) && (
                    "5 nights"
                  )}
                  {(dayNumber >= 24 && dayNumber < 27) && (
                    <div>
                      Available in other
                      <Span color={COLORS.blueRibbon}> room types</Span>
                    </div>
                  )}
                  {/* {dayNumber < 9
                    ? "SOLD OUT"
                    : dayNumber < 24
                    ? "3 nights"
                    : dayNumber < 27
                    ? "Available in other "
                    : "SOLD OUT"} */}
                </Span>
                {dayNumber >= 9 && dayNumber < 24 && (
                  <Span className="first-line">
                    <Span fontWeight="bold" fontSize="16px">$695</Span>
                    <Span>/Total</Span>
                  </Span>
                )}
                {/* {dayNumber >= 24 && dayNumber < 27 && (
                  <Span color={COLORS.blueRibbon}>room types</Span>
                )} */}
              </div>
            </div>
          )
        })}

      </List>

      { renderButtonGroup() }
    </StyledListDays>
  );
}

const StyledListDays = styled.div`
  .title {
    font-size: 16px;
    margin: 10px 0;
    font-weight: bold;
    line-height: 22px;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  @media ${BREAKPOINTS.mobileLg} {
    justify-content: space-between;
    .gradient-button {
      width: auto;
      box-sizing: border-box;
    }
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  .item {
    display: flex;
    border: 1px solid ${COLORS.parkinglotGray};

    .title {
      width: 80px;
      height: 48px;
      margin: 0;
      border-right: 1px solid ${COLORS.parkinglotGray};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span {
        vertical-align: revert;
      }

      .warning {
        background-color: ${COLORS.redHighlight};
        color: ${COLORS.red};
        font-weight: 500;
        font-size: 8px;
        line-height: 11px;
        padding: 2px;
        border-radius: 2px;
      }
    }

    .content {
      padding: 5px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: 12px;
    }
  }
`;
