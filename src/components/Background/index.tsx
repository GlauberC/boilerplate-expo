import React from 'react';
import * as Styled from './styles';

interface IBackgroundProps {
  scrollable?: boolean;
}

const Background: React.FC<IBackgroundProps> = ({ scrollable, children }) => (
  <>
    {scrollable ? (
      <Styled.Container>{children}</Styled.Container>
    ) : (
      <Styled.ContainerScroll>{children}</Styled.ContainerScroll>
    )}
  </>
);

export default Background;
