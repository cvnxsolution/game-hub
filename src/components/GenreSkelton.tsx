import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

interface Props {
  skeletons: number[];
}

const GenreSkeleton = ({ skeletons }: Props) => {
  return (
    <List>
      {skeletons.map((s) => (
        <ListItem key={s} height={"60px"}>
          <HStack>
            <Skeleton boxSize="40px" borderRadius={8} />
            <SkeletonText
              noOfLines={1}
              height={"20"}
              spacing="4"
              width="100%"
            />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreSkeleton;
