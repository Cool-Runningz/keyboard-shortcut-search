import React from "react";
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

const renderRows = () => {
  return listShortcutsData.map((item) => {
    return createData(
      <span>
        {item.keys.map((key, index) => (
          <>
            <kbd className="key-table">{key}</kbd>
            {index !== item.keys.length - 1 && <span>&nbsp; + &nbsp;</span>}
          </>
        ))}
      </span>,
      `${item.description}`
    );
  });
};

const rows = renderRows();

const TableView = (props) => {
  return (
    <Container maxWidth="md">
      <h2>List View</h2>
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

TableView.propTypes = {};

export default TableView;
