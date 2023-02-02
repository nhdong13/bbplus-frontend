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

const StyledTableContainer = styled(TableContainer)`
  border: 1px solid #7070702e;
  border-radius: 17px;
  box-shadow: 0px 0px 0.85px rgba(0, 0, 0, 0.4);
  max-width: 1641px;
  margin: auto;
  width: 100%;
`

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.white,
    color: COLORS.oxfordBlue,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

    '.id-container': {
      alignItems: 'center',
      background: 'transparent',
      border: `0.5px solid ${COLORS.tealBlue}`,
      borderRadius: '7px',
      display: 'flex',
      justifyContent: 'center',
      height: "41.44px",
      width: '100.44px',
    }
  },
  '& > .table-data': {
    color: `${COLORS.oxfordBlue}!important`,
  },
  '& > .table-status': {
    div: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      height: "34px",
      marginRight: 0,
      marginLeft: "auto",
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
      textTransform: 'uppercase',

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


interface tableData {
  id: string,
  guestName: string,
  creationDate: string,
  CreatedBy: string,
  hotelName: string,
  checkInOut: string,
  totalPrice: string,
  status: string,
}

const tableData = [
  {
    id: "1221",
    guestName: "Jack Maa",
    creationDate: "19-Aug-22 17:26",
    createdBy: "UserA",
    hotelName: "Hotel 1 Fiji",
    checkIn: "19-Dec-22",
    checkOut: "24-Dec-22",
    totalPrice: "FJD 1000",
    status: "paid",
  },
  {
    id: "1221",
    guestName: "Jack Maa",
    creationDate: "19-Aug-22 17:26",
    createdBy: "UserA",
    hotelName: "Hotel 1 Fiji",
    checkIn: "19-Dec-22",
    checkOut: "24-Dec-22",
    totalPrice: "FJD 1000",
    status: "quote",
  },
  {
    id: "1221",
    guestName: "Jack Maa",
    creationDate: "19-Aug-22 17:26",
    createdBy: "UserA",
    hotelName: "Hotel 1 Fiji",
    checkIn: "19-Dec-22",
    checkOut: "24-Dec-22",
    totalPrice: "FJD 1000",
    status: "refunded",
  },
]

export default function BookingTable() {

  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Booking ID#</StyledTableCell>
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
                <StyledTableCell className="table-data" align="right">{item.guestName}</StyledTableCell>
                <StyledTableCell className="table-data" align="right">{item.creationDate}</StyledTableCell>
                <StyledTableCell className="table-data" align="right">{item.createdBy}</StyledTableCell>
                <StyledTableCell className="table-data" align="right">{item.hotelName}</StyledTableCell>
                <StyledTableCell className="table-data" align="right">{item.checkIn}<br />{item.checkOut}</StyledTableCell>
                <StyledTableCell className="table-data" align="right">{item.totalPrice}</StyledTableCell>
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
