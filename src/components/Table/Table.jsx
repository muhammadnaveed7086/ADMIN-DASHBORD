import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(product, trackingId, date, status,details) {
  return { product, trackingId, date, status,details };
}

const rows = [
  createData('Frozen yoghurt', 898938244,'02 March 2024','Approved','Details' ),
  createData('Ice cream sandwich',  890904844,'02 Feb 2024','Approved','Details'),
  createData('Eclair',  18984844,'06 Jan 2024','Pending','Details'),
  createData('Cupcake',  892344844,'09 April 2024','Approved','Details'),
  createData('Gingerbread',  82444844,'04 Feb 2024','pending','Details'),
];

export default function CustomizedTables() {
  return (
    <div className="Table">
<h3>Recent Orders</h3>
    
    <TableContainer component={Paper}
    style={{boxShadow:'0px,13px,20px,0px #80808029'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>

            <StyledTableCell align="left">TrackingId</StyledTableCell>
            <StyledTableCell align="left">Date&nbsp;</StyledTableCell>
            <StyledTableCell align="left" 
           
            >Status&nbsp; </StyledTableCell>

            <StyledTableCell align="left">Details</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.product}
              </StyledTableCell>
              <StyledTableCell align="left">{row.trackingId}</StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
              <StyledTableCell align="left" style={row.status==='Approved'?{color:'green'}:{color:'red'}}>{row.status}</StyledTableCell>
              <StyledTableCell align="left">{row.details}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}