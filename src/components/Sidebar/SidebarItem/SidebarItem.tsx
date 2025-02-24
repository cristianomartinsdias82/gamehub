import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import "./SidebarItem.css";

interface Props {
  id: string;
  imageSrc: string;
  text: string;
  selectItem: (itemId: string) => void;
  gamesCount: number;
}

const SidebarItem = ({ id, imageSrc, text, selectItem }: Props) => {
  return (
    <HStack width="full" gap="0">
      <Image
        width="36px"
        height="36px"
        borderRadius="8px"
        src={imageSrc}
      ></Image>
      <Button size="sm" variant="plain" onClick={() => selectItem(id)}>
        {text}
      </Button>
    </HStack>
  );
};

export default SidebarItem;
