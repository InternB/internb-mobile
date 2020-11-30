import React, { useState, useEffect } from 'react';
import {
  TableHeader,
  TableBody,
  TableTitle,
  TableContentText,
  TableRow,
} from './styles';

interface Props {
  data: Array<unknown>;
  isClickable?: boolean;
  showHeader?: boolean;
}

const Table: React.FC<Props> = ({
  data,
  isClickable = false,
  showHeader = true,
}) => {
  const [rows, setRows] = useState([<></>]);

  useEffect(() => {
    const auxRow = [];
    for (let i = 0; i < data.length; i += 1) {
      auxRow.push(
        <TableRow index={i} key={Math.random() * 100}>
          <TableContentText>Registro 1</TableContentText>
          <TableContentText>00/00/0000</TableContentText>
        </TableRow>,
      );
    }
    setRows(auxRow);
  }, [data.length]);

  return (
    <>
      <TableHeader showHeader={showHeader}>
        <TableTitle>Registros Anteriores</TableTitle>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </>
  );
};

export default Table;
