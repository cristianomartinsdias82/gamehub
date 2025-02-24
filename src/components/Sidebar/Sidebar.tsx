import styled from "styled-components";
import SidebarItem from "./SidebarItem/SidebarItem";
import GenreDataService from "../../services/genres/GenreDataService";
import { useEffect, useState } from "react";
import { Genre } from "../../models/Genre";
import { Stack } from "@chakra-ui/react";

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bolder;
  margin-top: 0.6rem;
`;

interface Props {
  selectItem: (itemId: string) => void;
}

const Sidebar = ({ selectItem }: Props) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    GenreDataService.getGenres().request.then((genres) => setGenres(genres));
  }, []);

  return (
    <>
      <H2>Genres</H2>
      <Stack gap="2">
        {genres.map((it) => (
          <SidebarItem
            key={it.id}
            id={it.id}
            text={it.name}
            imageSrc={it.image_background}
            gamesCount={it.games_count}
            selectItem={selectItem}
          />
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;
