import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import "./SidebarItem.css";

interface Props {
  id: string;
  imageSrc: string;
  text: string;
  selectItem: (itemId: string) => void;
  gamesCount: number;
  selected: boolean;
}

const SidebarItem = ({ id, imageSrc, text, selectItem, selected }: Props) => {
  return (
    <HStack width="full" gap="0">
      <Image
        width="36px"
        height="36px"
        borderRadius="8px"
        src={imageSrc}
      ></Image>
      {!selected && (
        <Button
          size="sm"
          fontWeight={selected ? "bolder" : "normal"}
          variant="plain"
          onClick={() => selectItem(id)}
        >
          {text}
        </Button>
      )}
      {selected && (
        <Text ml="0.8rem" fontSize="sm" fontWeight="bolder">
          {text}
        </Text>
      )}
    </HStack>
  );
};

export default SidebarItem;
