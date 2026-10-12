import { Box } from "@chakra-ui/react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
} from "reactflow";
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

const edges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    animated: true,
  },
];

export const Workflow = () => {
  return (
    <Box height="500px" width="500px" border="1px solid black">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Box>
  );
};
