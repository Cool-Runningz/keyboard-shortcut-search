import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
              <kbd className="key-table">{key}</kbd>
              {index !== item.hotkeys.length - 1 && <span>&nbsp; + &nbsp;</span>}
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
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Keyboard Shortcut ✂️</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.description}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ width: "15rem" }}
                >
                  {row.shortcut}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </TableRow>
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
