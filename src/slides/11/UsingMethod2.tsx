import { Appear, CodePane, ListItem, OrderedList } from "spectacle";
import { customTheme } from "../7/customTheme";

const UsingComponents2 = () => {
  return (
    <div className="text-black">
      <OrderedList>
        <Appear>
          <ListItem className="text-black">
            Method 2: Can be consumed as React/Vue components
          </ListItem>
          <Appear>
            <CodePane language="bash">{`npm install @trygno/react-library`}</CodePane>
          </Appear>
          <Appear className="mt-2">
            <span className="text-black text-sm">OR</span>
            <CodePane language="bash">{`npm install @trygno/vue-library`}</CodePane>
          </Appear>
          <Appear>
            <h1 className="text-black text-sm mt-6 mb-2">
              Start Using components
            </h1>
            <CodePane language="jsx" theme={customTheme}>{`
                import { Button } from "@trygno/react-library";
            `}</CodePane>
          </Appear>
        </Appear>
      </OrderedList>
    </div>
  );
};

export default UsingComponents2;
