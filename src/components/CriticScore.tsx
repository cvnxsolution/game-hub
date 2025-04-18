import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize="14px"
      paddingX="5px"
      colorScheme={score > 75 ? "green" : "yellow"}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
