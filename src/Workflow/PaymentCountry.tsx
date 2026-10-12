import { Handle, Position, type NodeProps } from "reactflow";
import { Box, Flex, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

export const PaymentCountry = ({
  data: { currency, country, countryCode },
}: NodeProps<{
  currency: string;
  country: string;
  countryCode: string;
}>) => {
  return (
    <Flex
      alignItems="center"
      borderRadius="8px"
      bg="#e2e8f0"
      border="1px solid #bbbbdbf"
      p={2}
      gap={2}
      width="155px"
    >
      <Box>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          aria-label={country}
          style={{ fontSize: "2em", lineHeight: "2em" }}
        />
      </Box>
      <Flex grow={1} flexDirection="column">
        <Text fontSize="sm" fontWeight="bold">
          {country}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {currency}
        </Text>
      </Flex>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </Flex>
  );
};
