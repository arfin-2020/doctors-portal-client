import { Box } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import Rotate from 'react-reveal/Rotate';
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Users = () => {
  const [users, setUsers] = useState([]);
 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://doctors-portal-server-last.onrender.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
      <div>

      {
        loading ? <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
     
      <LinearProgress color="success" />
     
    </Stack>: <Rotate top left>
      <h2 className="mb-2 text-1xl font-bold">Total User: {users.length}</h2>
    <Box display="flex" alignItems="center" justifyContent="center">
    
      <TableContainer component={Paper} style={{ width: 800 }}>
        <Table style={{ width: 800 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>SL No</StyledTableCell>
              <StyledTableCell align="right">Names</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <StyledTableRow key={user._id}>
                <StyledTableCell component="th" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {user.displayName}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.role}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
        </Rotate>
      }
    </div>
  );
};

export default Users;
