import FullCalendar from "@fullcalendar/react";
import multiMonth from "@fullcalendar/multimonth";
import _ from "lodash";
import moment from "moment";
import styled from "styled-components";
import { Typography as Span } from "../Typography";
import { COLORS } from "@/utils/colors";

interface ICalendar {
  cellComponent?: React.ReactNode;
}

export default function Calendar({ cellComponent }: ICalendar) {
  const currentDate = moment();

  return (
    <StyledCalendar>
      <FullCalendar
        plugins={[multiMonth]}
        initialView="multiMonthYear"
        multiMonthMaxColumns={1}
        headerToolbar={false}
        multiMonthTitleFormat={{ month: "long", year: "numeric" }}
        views={{
          multiMonthYear: {
            type: "multiMonthYear",
            duration: { years: 1, months: 2 },
          },
        }}
        fixedWeekCount={true}
        dayCellClassNames={({ dayNumberText }) => {
          const dayNumber = Number(dayNumberText);
          if (dayNumber <= 8 || dayNumber >= 27) return "sold-out";
          return "";
        }}
        dayCellContent={({ dayNumberText }) => {
          const dayNumber = Number(dayNumberText);
          return (
            <div className="cell">
              <div className="">
                <Span>{dayNumberText}</Span>
                {[22, 23].includes(dayNumber) && (
                  <Span className="warning">1 room left</Span>
                )}
              </div>
              <Span>
                {dayNumber < 9
                  ? "SOLD OUT"
                  : dayNumber < 24
                  ? "3 nights"
                  : dayNumber < 27
                  ? "Available in other"
                  : "SOLD OUT"}
              </Span>
              {dayNumber > 9 && dayNumber < 24 && (
                <Span>
                  <Span fontWeight="bold">$X,XXX</Span> total
                </Span>
              )}
              {dayNumber >= 24 && dayNumber < 27 && (
                <Span color={COLORS.blueRibbon}>room types</Span>
              )}
            </div>
          );
        }}
      />
    </StyledCalendar>
  );
}

const StyledCalendar = styled.div`
  width: 100%;
  height: fit-content;
  /* overflow-y: auto; */
  .fc-daygrid-day {
    padding: 4px 12px;
    height: 70px;
    font-family: Manrope;
    border: 1px solid ${COLORS.gray83};
  }
  .fc-view-harness {
    height: 500px !important;
  }
  .fc-multimonth-daygrid-table {
    border-style: unset!important;
  }
  .fc-multimonth-daygrid-table {
    max-height: 340px !important;
  }
  .fc-multimonth {
    border: 0px;
  }
  .fc-multimonth-title {
    text-align: left;
    font-family: Manrope;
  }
  .fc-col-header-cell {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    border: 0px;
  }
  .fc-day-disabled {
    opacity: 0;
    border: 0px !important;
  }
  .fc-multimonth-daygrid {
    padding-top: 8px;
  }
  .sold-out {
    background-color: #eeeeee;
  }
  .cell {
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      span {
        display: inline-block;
      }
      .warning {
        background-color: ${COLORS.redF4};
        color: ${COLORS.redC4};
        padding: 1px 4px;
        border-radius: 2px;
        font-size: 10px;
      }
    }
    span {
      font-size: 12px;
      display: block;
      line-height: 20px;
      span {
        display: inline-block;
      }
    }
  }
`;
