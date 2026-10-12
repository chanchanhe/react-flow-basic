import { IconButton } from "@chakra-ui/react";
import { X } from "react-bootstrap-icons";
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
  type EdgeProps,
} from "reactflow";

export const CustomEdge = (props: EdgeProps) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <IconButton
          aria-label="Delete Edge"
          pos="absolute"
          color="red"
          pointerEvents="all"
          bg="transparent"
          size="sm"
          transform={`translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`}
          onClick={() =>
            setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id))
          }
        >
          <X />
        </IconButton>
      </EdgeLabelRenderer>
    </>
  );
};
