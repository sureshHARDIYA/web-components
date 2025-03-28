import { Appear, Box } from "spectacle";

const DesignSystemEchoSystemGeneral = () => {
  return (
    <div className="text-black">
      <Appear>
        <Box backgroundColor="primary" p={10} fontSize="h1" margin="5rem">
          <p-link-pure
            underline="true"
            href="https://bradfrost.com/blog/post/the-design-system-ecosystem/"
            size="large"
          >
            https://bradfrost.com/blog/post/the-design-system-ecosystem/
          </p-link-pure>
        </Box>
      </Appear>
    </div>
  );
};

export default DesignSystemEchoSystemGeneral;
