import React, {useEffect, useState} from 'react';
import { getAllUser } from '../service/userService';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Report = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const data = await getAllUser(); 
        setUsers(data); 
      } catch (e) {
        throw new Error({error:e.massage});
      }
    };

    setTimeout(()=>fetchUsers(),50);
  }, []);

  const toHome = () => {
    navigate('/home');
  }

  return(
    <div>
       <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">Red Ball</TableCell>
              <TableCell align="right">Blue Ball</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.username}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell align="right">{user.redball}</TableCell>
                <TableCell align="right">{user.blueball}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={toHome}>Home</Button>
    </div>
  );
}

export default Report;