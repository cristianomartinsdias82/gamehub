import { Box, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import SidebarItem from "./SidebarItem/SidebarItem";
import { Genres } from "../../services/genres/Genres";

interface Props {
  selectItem: (itemId: string | undefined) => void;
}

const Sidebar = ({ selectItem }: Props) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const onItemSelected = (itemId: string) => {
    setSelectedItemId(itemId);
    selectItem(!itemId || itemId === "0" ? undefined : itemId);
  };

  return (
    <Box width="224px">
      <Heading as="h2" size="3xl" my="1.1rem">
        Genres
      </Heading>
      <Stack gap="2">
        {Genres.map((it) => (
          <SidebarItem
            key={it.id}
            id={it.id}
            text={it.name}
            imageSrc={it.image_background}
            gameCount={it.games_count}
            selectItem={onItemSelected}
            selected={it.id === selectedItemId}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
