import { Badge, Text } from "@chakra-ui/react";

interface Props {
  reviewCount: number;
}

const Review = ({ reviewCount }: Props) => {

  const goodEvaluationColorDefinitionRule = () => reviewCount > 25;

  const getBagdeBgColor = () => {
    if (goodEvaluationColorDefinitionRule())
        return "green.700";

    return "red.700";
  }

  const getBagdeLabelColor = () => {
    if (goodEvaluationColorDefinitionRule())
        return "green.200";

    return "red.200";
  }

  return (
    <Badge bg={{ base: getBagdeBgColor() }}>
      <Text fontWeight="semibold" color={{ base: getBagdeLabelColor() }} textWrap="wrap">
        {reviewCount}
      </Text>
    </Badge>
  );
};

export default Review;
