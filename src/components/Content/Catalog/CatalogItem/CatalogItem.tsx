import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcon/PlatformIcons";
import { getOptimizedImageUrl } from "../../../../services/getOptimizedImageUrl";
import { Title } from "../../../../models/Title";
import Rating, { ratings } from "./Rating/Rating";
import noImage from '../../../../assets/no-image-placeholder.webp';
import Review from "./Review/Review";

interface Props {
  item: Title;
}

const CatalogItem = ({ item }: Props) => {
  return (
    <Card.Root width="xs" key={item.id} overflow="hidden">
      <Image
        width="100%"
        maxWidth="340px"
        height="250px"
        src={item.background_image ? getOptimizedImageUrl(item.background_image) : noImage}
        alt={item.name}
      />
      <Card.Body gap="2">
        <Flex justify="space-between">
          <Box>
            <PlatformIcons platforms={item.platforms} />
          </Box>
          <Box>
            <Review reviewCount={item.reviews_text_count} />
          </Box>
        </Flex>
        <Flex>
          <Text fontWeight="medium" textStyle="1xl">
            {item.name}
          </Text>
        </Flex>
        <Flex>
          <Rating rating={item.rating as ratings} />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default CatalogItem;
