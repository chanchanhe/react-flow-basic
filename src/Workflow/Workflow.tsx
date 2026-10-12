import { Box } from "@chakra-ui/react";
import { ReactFlow, type Node } from "reactflow";
import "reactflow/dist/style.css";

const nodes: Node[] = [
  {
    id: "1",
    data: {
      label: "Node 1",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: {
      label: "Node 2",
    },
    position: { x: 200, y: 200 },
  },
];

export const Workflow = () => {
  return (
    <Box height="500px" width="500px" border="1px solid black">
      <ReactFlow nodes={nodes} />
    </Box>
  );
};
