import { Text } from "@chakra-ui/react";

interface Props {
  error: string;
}

const Error = ({ error }: Props) => {
  if (!error) return <></>;

  return (
    <Text>{`An error occurred while attempting to process the request: "${error}". Please try again later. We are sorry for the inconvenient.`}</Text>
  );
};

export default Error;
