import { Box, Text } from "@chakra-ui/react";
import { Handle, Position, type NodeProps } from "reactflow";

export const PaymentInit = ({
  data: { amount },
}: NodeProps<{ amount: number }>) => {
  return (
    <Box bg="white" border="1px solid #aa1fff">
      <Box bg="#410566" p={1}>
        <Text fontSize="sm" color="white">
          Payment Initialzed
        </Text>
      </Box>
      <Box p={2}>
        <Text fontSize="2xl" color="blue.600">
          {amount}
        </Text>
      </Box>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};
