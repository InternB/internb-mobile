import React, { useState, useEffect } from 'react';
import avatarImg from '../../assets/images/mocked_img.jpg';
import { Image, ImagesContainer } from './styles';

interface Props {
  data?: unknown[];
}

const ImagesComponent: React.FC<Props> = ({ data = [] }) => {
  const [images, setImages] = useState<Element[]>([]);

  useEffect(() => {
    const aux: Element[] = [];
    for (let i = 0; i < data.length; i += 1) {
      aux.push(<Image source={avatarImg} />);
    }
    setImages(aux);
  }, [data]);

  return (
    <>
      <ImagesContainer>{images}</ImagesContainer>
    </>
  );
};

export default ImagesComponent;
