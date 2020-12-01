import React, { useState, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { Border, Label, BorderHole, TextField, Icon } from './styles';

interface Props extends TextInputProps {
  label?: string;
  value?: string;
  icon?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  label = '',
  value = '',
  icon,
  placeholder = '',
  ...rest
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [hasContent, setHasContent] = useState<boolean>(false);
  const [placeholderContent, setPlaceholderContent] = useState<string>('');

  useEffect(() => {
    if (value.length > 0) {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
  }, [value]);

  useEffect(() => {
    if (focus) {
      setPlaceholderContent(placeholder);
    } else {
      setPlaceholderContent('');
    }
  }, [focus, placeholder]);

  return (
    <>
      <Border focus={focus} {...rest}>
        <BorderHole hasContent={hasContent} focus={focus}>
          {label}
        </BorderHole>
        <Label hasContent={hasContent} focus={focus}>
          {label}
        </Label>
        <TextField
          {...rest}
          value={value}
          placeholder={placeholderContent}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
        />
        {icon && <Icon name={icon} size={20} />}
      </Border>
    </>
  );
};

export default Input;
