import { Box, Skeleton } from "@chakra-ui/react";

export default function SkeletonModel({ size }) {
  const skeletons = Array.from({ length: size }, (_, index) => (
    <Box
      padding="6"
      width="100%"
      height="400px"
      boxShadow="lg"
      bg="white"
      key={index}
    >
      <Skeleton height="20px" mb={3} />
      <Skeleton height="20px" mb={3} />
      <Skeleton height="20px" mb={3} />
      <Skeleton height="20px" mb={3} />
      <Skeleton height="20px" />
      {/* <Skeleton height="20px" mb={3} />
      <Skeleton height="20px" mb={3} />
      <Skeleton height="20px" mb={3} />
      <Skeleton height="20px" mb={3} />
      <Skeleton height="20px" mb={3} /> */}
    </Box>
  ));

  return <>{skeletons}</>;
}
