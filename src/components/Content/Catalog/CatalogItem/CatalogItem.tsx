import { Badge, Box, Card, Flex, Image, Text } from "@chakra-ui/react";

import { Title } from "../../../../models/Title";
import PlatformIcons from "./PlatformIcon/PlatformIcons";
import { getOptimizedImageUrl } from "../../../../services/getOptimizedImageUrl";
import Rating from "./Rating/Rating";

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
        src={getOptimizedImageUrl(item.background_image)}
        alt={item.name}
      />
      <Card.Body gap="2">
        <Flex justify="space-between">
          <Box>
            <PlatformIcons platforms={item.platforms} />
          </Box>
          <Box>
            <Badge bg={{ base: "green.700" }}>
              <Text
                fontWeight="semibold"
                color={{ base: "green.200" }}
                textWrap="wrap"
              >
                {item.reviews_text_count}
              </Text>
            </Badge>
          </Box>
        </Flex>
        <Flex>
          <Text fontWeight="medium" textStyle="1xl">
            {item.name}
          </Text>
        </Flex>
        <Flex>
          <Rating rating={item.rating} />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default CatalogItem;
