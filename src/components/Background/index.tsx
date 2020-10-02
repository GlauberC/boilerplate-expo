import React from "react";
import * as S from "./styles";

interface IBackgroundProps {
  scrollable?: boolean;
}

const Background: React.FC<IBackgroundProps> = ({ scrollable, children }) => (
  <>
    {scrollable ? (
      <S.Container>{children}</S.Container>
    ) : (
      <S.ContainerScroll>{children}</S.ContainerScroll>
    )}
  </>
);

export default Background;
