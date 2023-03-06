import React, { useRef, useState } from 'react';
// Chakra UI
import { Flex, Icon, Text, Button, Stack, Box } from '@chakra-ui/react';
// React Icons
import { GoPlus, GoDash } from 'react-icons/go';
// Components
import { svg } from 'elements/mapSvg';

export default function Map() {
  const [scale, setScale] = useState(1);
  const canvasRef = useRef(null);

  // const handleWheel = (e) => {
  //   e.preventDefault();
  //   const newScale = Math.max(0.1, Math.min(scale + e.deltaY * -0.001, 10));
  //   setScale(newScale);
  // };

  const handleZoomIn = () => {
    const newScale = Math.min(scale + 0.1, 10);
    setScale(newScale);
  };

  const handleZoomOut = () => {
    const newScale = Math.max(scale - 0.1, 0.1);
    setScale(newScale);
  };
  return (
    <Flex
      gap="16px"
      border="1px"
      borderColor="darkblue.brThree"
      w="100%"
      h="100%"
      overflow="scroll"
      pt="32px"
      // pl="118px"
      pr="113px"
      pb="64px"
      borderRadius="13px"
      bg="darkblue.bgFour"
      // onWheel={handleWheel}
      ref={canvasRef}
      position="relative"
      direction="row"
      justify="center"
    >
      <Stack position="absolute" top="56px" right="64px">
        <Button borderBottomRadius="0" borderTopRadius="4px" height="38px" width="38px" onClick={handleZoomIn}>
          <Icon as={GoPlus} color="#666666" boxSize="5" />
        </Button>
        <Button borderBottomRadius="4px" borderTopRadius="0" height="38px" width="38px" onClick={handleZoomOut}>
          <Icon as={GoDash} color="#666666" boxSize="6" />
        </Button>
      </Stack>
      <Stack direction="row" justify="space-between" align="end" w="90%">
        <Box mx="auto" w="80%">
          <svg width="100%" height="100%" viewBox={`0 0 ${svg.width} ${svg.height}`} transform={`scale(${scale})`}>
            {svg.elements}
          </svg>
        </Box>
        <Stack direction="column" gap="32px">
          <Flex align="center">
            <Box bg="#64CCFF" w="32px" h="24px" mr="16px"></Box>
            <Text textTransform="uppercase" fontWeight="500" fontSize="14px" color="#57656B">
              APC
            </Text>
          </Flex>
          <Flex align="center">
            <Box bg="#0AA83F" w="32px" h="24px" mr="16px"></Box>
            <Text fontWeight="500" fontSize="14px" color="#57656B">
              LP
            </Text>
          </Flex>
          <Flex align="center">
            <Box bg="#D62B3C" w="32px" h="24px" mr="16px"></Box>
            <Text textTransform="uppercase" fontWeight="500" fontSize="14px" color="#57656B">
              PDF
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}
