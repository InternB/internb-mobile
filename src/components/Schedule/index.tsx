import React from 'react';
import { Cell, CellText, HeaderCell, HeaderText, Row, Icon } from './styles';

interface dataType {
  monday: boolean[];
  tuesday: boolean[];
  wednesday: boolean[];
  thursday: boolean[];
  friday: boolean[];
  saturday: boolean[];
  sunday: boolean[];
}

interface Props {
  data: dataType;
}

const Schedule: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Row>
        <HeaderCell>
          <HeaderText />
        </HeaderCell>
        <HeaderCell>
          <HeaderText>Segunda</HeaderText>
        </HeaderCell>
        <HeaderCell>
          <HeaderText>Terça</HeaderText>
        </HeaderCell>
        <HeaderCell>
          <HeaderText>Quarta</HeaderText>
        </HeaderCell>
        <HeaderCell>
          <HeaderText>Quinta</HeaderText>
        </HeaderCell>
        <HeaderCell>
          <HeaderText>Sexta</HeaderText>
        </HeaderCell>
        <HeaderCell>
          <HeaderText>Sábado</HeaderText>
        </HeaderCell>
        <HeaderCell>
          <HeaderText>Domingo</HeaderText>
        </HeaderCell>
      </Row>
      <Row>
        <Cell colorIndex={0}>
          <CellText>8h - 10h</CellText>
        </Cell>
        <Cell colorIndex={0}>
          <Icon name="check" isSelected={data.monday[0]} />
        </Cell>
        <Cell colorIndex={1}>
          <Icon name="check" isSelected={data.tuesday[0]} />
        </Cell>
        <Cell colorIndex={2}>
          <Icon name="check" isSelected={data.wednesday[0]} />
        </Cell>
        <Cell colorIndex={3}>
          <Icon name="check" isSelected={data.thursday[0]} />
        </Cell>
        <Cell colorIndex={4}>
          <Icon name="check" isSelected={data.friday[0]} />
        </Cell>
        <Cell colorIndex={5}>
          <Icon name="check" isSelected={data.saturday[0]} />
        </Cell>
        <Cell colorIndex={6}>
          <Icon name="check" isSelected={data.sunday[0]} />
        </Cell>
      </Row>
      <Row>
        <Cell colorIndex={0}>
          <CellText>10h - 12h</CellText>
        </Cell>
        <Cell colorIndex={1}>
          <Icon name="check" isSelected={data.monday[1]} />
        </Cell>
        <Cell colorIndex={2}>
          <Icon name="check" isSelected={data.tuesday[1]} />
        </Cell>
        <Cell colorIndex={3}>
          <Icon name="check" isSelected={data.wednesday[1]} />
        </Cell>
        <Cell colorIndex={4}>
          <Icon name="check" isSelected={data.thursday[1]} />
        </Cell>
        <Cell colorIndex={5}>
          <Icon name="check" isSelected={data.friday[1]} />
        </Cell>
        <Cell colorIndex={6}>
          <Icon name="check" isSelected={data.saturday[1]} />
        </Cell>
        <Cell colorIndex={7}>
          <Icon name="check" isSelected={data.sunday[1]} />
        </Cell>
      </Row>
      <Row>
        <Cell colorIndex={0}>
          <CellText>12h - 14h</CellText>
        </Cell>
        <Cell colorIndex={0}>
          <Icon name="check" isSelected={data.monday[2]} />
        </Cell>
        <Cell colorIndex={1}>
          <Icon name="check" isSelected={data.tuesday[2]} />
        </Cell>
        <Cell colorIndex={2}>
          <Icon name="check" isSelected={data.wednesday[2]} />
        </Cell>
        <Cell colorIndex={3}>
          <Icon name="check" isSelected={data.thursday[2]} />
        </Cell>
        <Cell colorIndex={4}>
          <Icon name="check" isSelected={data.friday[2]} />
        </Cell>
        <Cell colorIndex={5}>
          <Icon name="check" isSelected={data.saturday[2]} />
        </Cell>
        <Cell colorIndex={6}>
          <Icon name="check" isSelected={data.sunday[2]} />
        </Cell>
      </Row>
      <Row>
        <Cell colorIndex={0}>
          <CellText>14h - 16h</CellText>
        </Cell>
        <Cell colorIndex={1}>
          <Icon name="check" isSelected={data.monday[3]} />
        </Cell>
        <Cell colorIndex={2}>
          <Icon name="check" isSelected={data.tuesday[3]} />
        </Cell>
        <Cell colorIndex={3}>
          <Icon name="check" isSelected={data.wednesday[3]} />
        </Cell>
        <Cell colorIndex={4}>
          <Icon name="check" isSelected={data.thursday[3]} />
        </Cell>
        <Cell colorIndex={5}>
          <Icon name="check" isSelected={data.friday[3]} />
        </Cell>
        <Cell colorIndex={6}>
          <Icon name="check" isSelected={data.saturday[3]} />
        </Cell>
        <Cell colorIndex={7}>
          <Icon name="check" isSelected={data.sunday[3]} />
        </Cell>
      </Row>
      <Row>
        <Cell colorIndex={0}>
          <CellText>16h - 18h</CellText>
        </Cell>
        <Cell colorIndex={0}>
          <Icon name="check" isSelected={data.monday[4]} />
        </Cell>
        <Cell colorIndex={1}>
          <Icon name="check" isSelected={data.tuesday[4]} />
        </Cell>
        <Cell colorIndex={2}>
          <Icon name="check" isSelected={data.wednesday[4]} />
        </Cell>
        <Cell colorIndex={3}>
          <Icon name="check" isSelected={data.thursday[4]} />
        </Cell>
        <Cell colorIndex={4}>
          <Icon name="check" isSelected={data.friday[4]} />
        </Cell>
        <Cell colorIndex={5}>
          <Icon name="check" isSelected={data.saturday[4]} />
        </Cell>
        <Cell colorIndex={6}>
          <Icon name="check" isSelected={data.sunday[4]} />
        </Cell>
      </Row>
      <Row>
        <Cell colorIndex={0}>
          <CellText>18h - 20h</CellText>
        </Cell>
        <Cell colorIndex={1}>
          <Icon name="check" isSelected={data.monday[5]} />
        </Cell>
        <Cell colorIndex={2}>
          <Icon name="check" isSelected={data.tuesday[5]} />
        </Cell>
        <Cell colorIndex={3}>
          <Icon name="check" isSelected={data.wednesday[5]} />
        </Cell>
        <Cell colorIndex={4}>
          <Icon name="check" isSelected={data.thursday[5]} />
        </Cell>
        <Cell colorIndex={5}>
          <Icon name="check" isSelected={data.friday[5]} />
        </Cell>
        <Cell colorIndex={6}>
          <Icon name="check" isSelected={data.saturday[5]} />
        </Cell>
        <Cell colorIndex={7}>
          <Icon name="check" isSelected={data.sunday[5]} />
        </Cell>
      </Row>
      <Row>
        <Cell colorIndex={0}>
          <CellText>20h - 22h</CellText>
        </Cell>
        <Cell colorIndex={0}>
          <Icon name="check" isSelected={data.monday[6]} />
        </Cell>
        <Cell colorIndex={1}>
          <Icon name="check" isSelected={data.tuesday[6]} />
        </Cell>
        <Cell colorIndex={2}>
          <Icon name="check" isSelected={data.wednesday[6]} />
        </Cell>
        <Cell colorIndex={3}>
          <Icon name="check" isSelected={data.thursday[6]} />
        </Cell>
        <Cell colorIndex={4}>
          <Icon name="check" isSelected={data.friday[6]} />
        </Cell>
        <Cell colorIndex={5}>
          <Icon name="check" isSelected={data.saturday[6]} />
        </Cell>
        <Cell colorIndex={6}>
          <Icon name="check" isSelected={data.sunday[6]} />
        </Cell>
      </Row>
    </>
  );
};

export default Schedule;
