import { Badge, Box, Card, Flex, HStack, Image, Text } from "@chakra-ui/react";

import { Title } from "../../../../models/Title";
import PlatformIcon from "./PlatformIcon/PlatformIcon";

interface Props {
  item: Title;
}

const CatalogItem = ({ item }: Props) => {
  const getRatingThumbnail = (rating: string) => {
    let thumb = "";

    switch (rating.trim().toLowerCase()) {
      case "exceptional":
        thumb = "bulls-eye";
        break;
      case "recommended":
        thumb = "thumbs-up";
        break;
      case "meh":
      case "skip":
        thumb = "meh";
        break;
    }

    if (thumb === "") return <></>;

    return (
      <Image
        width="2rem"
        height="2rem"
        key={rating}
        alt={rating}
        src={`src/assets/${thumb}.webp`}
      ></Image>
    );
  };

  return (
    <Card.Root width="xs" key={item.id} overflow="hidden">
      <Image
        width="100%"
        maxWidth="340px"
        height="250px"
        src={item.background_image}
        alt={item.name}
      />
      <Card.Body gap="2">
        <Flex justify="space-between">
          <Box>
            <HStack gap="1">
              {item.platforms.map((it) => (
                <PlatformIcon key={it.id} slug={it.slug} />
              ))}
            </HStack>
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
        <Flex>{getRatingThumbnail(item.rating)}</Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default CatalogItem;
