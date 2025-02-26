import { Switch, Text } from "@chakra-ui/react";

import { useColorMode } from "../../ui/color-mode";

interface Props {
  bgColor?: string;
}

const ColorMode = ({ bgColor = "green" }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch.Root
      checked={colorMode === "dark"}
      onCheckedChange={() => toggleColorMode()}
      colorPalette={bgColor}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>
        <Text whiteSpace="nowrap">Dark mode</Text>
      </Switch.Label>
    </Switch.Root>
  );
};

export default ColorMode;
