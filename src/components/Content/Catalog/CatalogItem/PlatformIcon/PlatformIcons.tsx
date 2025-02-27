import { HStack } from "@chakra-ui/react";
import { Platform } from "../../../../../models/Platform";
import PlatformIconItem from "./PlatformIconItem";

interface Props {
    platforms: Platform[]
}

const PlatformIcons = ({platforms}:Props) => {

    return (
        <HStack gap="1">        
            {platforms.map((it) => (
                <PlatformIconItem key={it.id} slug={it.slug} />
            ))}
        </HStack>
    );

}

export default PlatformIcons;