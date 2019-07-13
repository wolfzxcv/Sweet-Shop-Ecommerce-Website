import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Flex, Text } from 'rebass';

import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';

const Loading = () => {
  return (
    <StyledBox>
      <Flex justifyContent='center' alignItems='center'>
        <Rotate>
          <LoaderAlt />
        </Rotate>
        <Text fontSize='30px'>Now Loading...</Text>
      </Flex>
    </StyledBox>
  );
};

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  width: 100px;
  height: 100px;
  animation: ${rotate} 1s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const StyledBox = styled(Box)`
  width: 100%;
  height: 90vh;
  background: rgba(0, 0, 0, 0.4);
`;

export default Loading;
