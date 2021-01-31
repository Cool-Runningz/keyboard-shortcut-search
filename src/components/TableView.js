import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//Data
import { ABBREV } from "../data/mappings";

//Material UI
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

/********* Additional Table Styling **************/
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#edebf1"
    }
  }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#152835",
    color: theme.palette.common.white,
    fontSize: 18
  }
}))(TableCell);

function createData(shortcut, description) {
  return { shortcut, description };
}

const renderRows = (selectedCategory, data) => {
  return data
    .filter((item) => item.category === selectedCategory)
    .map((item) => {
      return createData(
        <>
          {item.hotkeys.map((key, index) => (
            <span key={`${index} - ${key[0]}`}>
              <kbd className="key-table">{ABBREV[key] || key}</kbd>
              {index !== item.hotkeys.length - 1 && (
                <span>&nbsp; + &nbsp;</span>
              )}
            </span>
          ))}
        </>,
        `${item.description}`
      );
    });
};

const TableView = (props) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(renderRows(props.category, props.data));
  }, [props.category, props.data]);

  return (
    <Container maxWidth="md" style={{ marginBottom: "3rem" }}>
      <TableContainer elevation={3} component={Paper}>
        <Table aria-label="Table view of shortcuts">
          <TableHead>
            <TableRow>
              <StyledTableCell>Keyboard Shortcut ✂️</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={`${index} - ${row.description}`}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ width: "15rem" }}
                >
                  {row.shortcut}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

TableView.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.array
};

export default TableView;
