import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const CatalogItemContainer = ({ children }: Props) => {
  return (
    <Box width="100%" marginBottom="0.6rem" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default CatalogItemContainer;
