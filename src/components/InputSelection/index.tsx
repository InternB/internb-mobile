import React, { useState, useEffect } from 'react';
import {
  Border,
  ContentField,
  ContentText,
  IconContainer,
  Icon,
  ListBackground,
  ListItem,
} from './styles';

interface ListItemData {
  name: string;
  value: string | number;
}

interface Props {
  itemsList?: Array<ListItemData>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const InputSelection: React.FC<Props> = ({
  itemsList = [],
  index = 0,
  setIndex,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  let selected = false;
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    try {
      setSelectedValue(itemsList[index].name);
    } catch (e) {
      setSelectedValue('');
    }
  }, [index, itemsList]);

  return (
    <>
      <Border>
        <ContentField>
          <ContentText>{selectedValue}</ContentText>
        </ContentField>
        <IconContainer
          onPress={() => {
            setExpanded(!expanded);
          }}
          onBlur={() => {
            setExpanded(false);
          }}
        >
          <Icon name="chevron-down" size={25} />
        </IconContainer>
      </Border>
      <ListBackground expanded={expanded}>
        {itemsList.map((item, i) => {
          if (index === i) {
            selected = true;
          } else {
            selected = false;
          }
          return (
            <ListItem
              selected={selected}
              key={item.value}
              onPress={() => {
                setIndex(i);
                setExpanded(false);
              }}
            >
              <ContentText>{item.name}</ContentText>
            </ListItem>
          );
        })}
      </ListBackground>
    </>
  );
};

export default InputSelection;
