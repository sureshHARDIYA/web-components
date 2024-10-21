import { Appear, ListItem, OrderedList, CodeSpan } from "spectacle";

const GettingStarted = () => {
  return (
    <>
      <OrderedList>
        <Appear>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Out of order</ListItem>
        </Appear>
        <Appear priority={0}>
          <ListItem>
            Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
          </ListItem>
        </Appear>
      </OrderedList>
    </>
  );
};

export default GettingStarted;
