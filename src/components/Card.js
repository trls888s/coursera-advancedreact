import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
    backgroundColor="white"
    borderRadius="lg"
    boxShadow="lg"
    padding="0"
    width="100%"
    >
      <Image borderTopRadius="md"
      src={imageSrc} 
      />
      <VStack
      alignItems="flex-start"
      justifyContent="flex-start"
      padding="4"
      width="100%"
      >
        <Heading as="h3" size="xl" fontWeight="bold" color={"black"}>{title}</Heading>
        <Text color="gray.500">{description}</Text>
        <HStack>
          <Text fontWeight="bold" color={"black"}>
            See More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="xl" color="black" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
