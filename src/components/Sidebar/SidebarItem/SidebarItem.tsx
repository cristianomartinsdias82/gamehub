import { Button, HStack, Image, Text } from "@chakra-ui/react";
import "./SidebarItem.css";

interface Props {
  id: string;
  imageSrc: string;
  text: string;
  gamesCount: number;
  selected: boolean;
  selectItem: (itemId: string) => void;
}

const SidebarItem = ({
  id,
  imageSrc,
  text,
  gamesCount,
  selected,
  selectItem,
}: Props) => {

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
          <Text>
            {text} {gamesCount > 0 ? (<>({gamesCount})</>) : <></>}
          </Text>
        </Button>
      )}
      {selected && (
        <Text ml="0.6rem" fontSize="sm" fontWeight="bolder">
          {text} {gamesCount > 0 ? (<>({gamesCount})</>) : <></>}
        </Text>
      )}
    </HStack>
  );
};

export default SidebarItem;
