import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { COLORS } from '@/utils/colors';
import TableContainer from '@mui/material/TableContainer';
import { FONTS } from '@/utils/fonts';
import { useEffect, useState } from 'react';
import { tableData } from '@/utils/tempData';
import { BREAKPOINTS } from '@/utils/breakpoints';

const StyledTableContainer = styled(TableContainer)`
  border: 1px solid #7070702e;
  border-radius: 17px;
  box-shadow: 0px 0px 0.85px rgba(0, 0, 0, 0.4);
  max-width: 1400px;
  margin: auto;
  width: 100%;

  @media ${BREAKPOINTS.desktopLg} {
    width: 90%;
  }

  table {
    min-width: 768px;
    overflow: scroll;
  }
`

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.white,
    color: COLORS.oxfordBlue,
    textAlign: "center",

    "@media only screen and (max-width: 768px)": {
      fontSize: 14,
      lineHeight: "20px",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: FONTS.manrope,

    "@media only screen and (max-width: 768px)": {
      fontSize: "12px",
      lineHeight: "17px",
    },
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#e8f4ff",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '& > .table-id': {
    color: `${COLORS.lapisLazuli}!important`,
    display: "flex",
    justifyContent: "center",

    "@media only screen and (max-width: 1024px)": {
      border: "0px",
    },

    '.id-container': {
      alignItems: 'center',
      background: 'transparent',
      border: `0.5px solid ${COLORS.tealBlue}`,
      borderRadius: '7px',
      display: 'flex',
      justifyContent: 'center',
      height: "44px",
      width: '100.44px',

      "@media only screen and (max-width: 768px)": {
        height: "30px",
        width: '60px',
      },
    }
  },
  '& > .table-data': {
    color: `${COLORS.oxfordBlue}!important`,
    textAlign: "center",

    "@media only screen and (max-width: 1024px)": {
      border: "0px",
      padding: "0px",
    },
  },
  '& > .table-status': {
    "@media only screen and (max-width: 1024px)": {
      border: "0px",
    },

    div: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      height: "34px",
      margin: "auto",
      textAlign: "center",
      width: "115px",

      '&.paid': {
        backgroundColor: COLORS.summerGreen,
      },
      '&.quote': {
        backgroundColor: COLORS.indiaKhaki,
      },
      '&.refunded': {
        backgroundColor: COLORS.blushPink,
      }
    },

    span: {
      fontFamily: FONTS.manrope,
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "22px",
      textTransform: 'capitalize',

      "@media only screen and (max-width: 1024px)": {
        fontSize: "14px",
        lineHeight: "20px",
      },

      "@media only screen and (max-width: 768px)": {
        fontSize: "12px",
        lineHeight: "17px",
      },

      '&.paid': {
        color: COLORS.salem,
      },
      '&.quote': {
        color: COLORS.rustyNail,
      },
      '&.refunded': {
        color: COLORS.fuchasiaPink,
      }
    }
  }
}));

export default function BookingTable() {
  return (
    <StyledTableContainer component={Paper} className="booking-table">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='header-center'>Booking ID#</StyledTableCell>
            <StyledTableCell align="right">Guest Name</StyledTableCell>
            <StyledTableCell align="right">Creation Date</StyledTableCell>
            <StyledTableCell align="right">Created By</StyledTableCell>
            <StyledTableCell align="right">Hotel Name</StyledTableCell>
            <StyledTableCell align="right">Check-In/Out</StyledTableCell>
            <StyledTableCell align="right">Total Price</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item, index) => {
            const [statusColor, setStatusColor] = useState<string>('');
            const handleStatusColor = (status: string) => {
              switch (status) {
                case ('paid'):
                  setStatusColor('paid');
                  break;
                case ('quote'):
                  setStatusColor('quote');
                  break;
                case ('refunded'):
                  setStatusColor('refunded');
                  break;
              }
            }

            useEffect(() => {
              handleStatusColor(item.status)
            }, [handleStatusColor, item.status])

            return (
              <StyledTableRow key={index}>
                <StyledTableCell className='table-id' component="th" scope="row">
                  <div className='id-container'>
                    {item.id}
                  </div>
                </StyledTableCell>
                <StyledTableCell className="table-data center" align="right">{item.guestName}</StyledTableCell>
                <StyledTableCell className="table-data center" align="right">{item.creationDate}</StyledTableCell>
                <StyledTableCell className="table-data" align="right">{item.createdBy}</StyledTableCell>
                <StyledTableCell className="table-data" align="right">{item.hotelName}</StyledTableCell>
                <StyledTableCell className="table-data" align="right">{item.checkIn}<br />{item.checkOut}</StyledTableCell>
                <StyledTableCell className="table-data center" align="right">{item.totalPrice}</StyledTableCell>
                <StyledTableCell className={`table-status ${statusColor}`} align="center">
                  <div className={statusColor}>
                    <span className={statusColor}>{item.status}</span>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
