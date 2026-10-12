import { IconButton } from "@chakra-ui/react";
import { X } from "react-bootstrap-icons";
import { BezierEdge, EdgeLabelRenderer, type EdgeProps } from "reactflow";

export const CustomEdge = (props: EdgeProps) => {
  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer></EdgeLabelRenderer>
    </>
  );
};
