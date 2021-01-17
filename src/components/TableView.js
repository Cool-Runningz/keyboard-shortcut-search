import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { listShortcutsData } from "../helpers/shortcuts";

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

const renderRows = (selectedCategory) => {
  return listShortcutsData
    .filter((item) => item.category === selectedCategory)
    .map((item) => {
      return createData(
        <>
          {item.keys.map((key, index) => (
            <span key={`${index} - ${key[0]}`}>
              <kbd className="key-table">{key}</kbd>
              {index !== item.keys.length - 1 && <span>&nbsp; + &nbsp;</span>}
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
    setRows(renderRows(props.category));
  }, [props.category]);

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
  category: PropTypes.string.isRequired
};

export default TableView;
