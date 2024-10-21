import { Appear, ListItem, OrderedList, CodePane } from "spectacle";

import codeTheme from "./codeTheme";

const GettingStarted = () => {
  return (
    <>
      <OrderedList className="bg-green">
        <Appear>
          <StyledListItem>
            Make sure you have <kbd>npm</kbd> proxy configured.
          </StyledListItem>
          <CodePane language="bash" theme={codeTheme as any}>
            {`  
           registry = "https://dkdc2supdevw002.prd1.prdroot.net:9443/nexus/content/groups/npm-all"
           strict-ssl = false
            `}
          </CodePane>
        </Appear>
        <Appear>
          <StyledListItem>
            Clone <kbd>trygno-ui</kbd> repository.
          </StyledListItem>
          <CodePane language="bash" theme={codeTheme as any}>
            {`git clone https://gitlab.devops.prdroot.net/service/jee/change-calculator/trygno-ui.git`}
          </CodePane>
        </Appear>
        <Appear>
          <StyledListItem>
            And that's it. Start creating web-component.
          </StyledListItem>
        </Appear>
      </OrderedList>
    </>
  );
};

export default GettingStarted;

const StyledListItem = ({ children }: any) => (
  <ListItem className="text-black list-decimal">{children}</ListItem>
);
