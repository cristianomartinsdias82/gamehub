import { Badge, Text } from "@chakra-ui/react";

interface Props {
  metacritic?: number;
}

const Review = ({ metacritic }: Props) => {
  if (!metacritic) return <></>;

  const positiveScoreColorDefinitionRule = () => metacritic > 25;

  const getBagdeBgColor = () => {
    if (positiveScoreColorDefinitionRule()) return "green.700";

    return "red.700";
  };

  const getBagdeLabelColor = () => {
    if (positiveScoreColorDefinitionRule()) return "green.200";

    return "red.200";
  };

  return (
    <Badge bg={{ base: getBagdeBgColor() }}>
      <Text
        fontWeight="semibold"
        color={{ base: getBagdeLabelColor() }}
        textWrap="wrap"
      >
        {metacritic}
      </Text>
    </Badge>
  );
};

export default Review;
