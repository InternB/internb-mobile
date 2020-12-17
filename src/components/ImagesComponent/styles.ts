import styled from 'styled-components/native';

export const ImagesContainer = styled.View.attrs(() => ({
  nestedScrollEnabled: true,
  contentContainerStyle: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}))`
  width: 90%;
  height: 250px;
  border-width: 1px;
  border-color: #56557e;
  border-style: solid;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-self: center;
  align-content: flex-start;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-width: 1px;
  border-color: #cccccc;
  margin: 5px;
`;
