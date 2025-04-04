import { SMARTCheckbox } from "@/presentations/design-echo-system/slides/3/Problems";
import { customTheme } from "@/slides/7/customTheme";
import { Appear, Box, CodePane } from "spectacle";

const NordicDesignSystem = () => {
  return (
    <Appear>
      <Box backgroundColor="primary" p={10}>
        <SMARTCheckbox
          label="Most likely Nordic Design System / (TBD, Proposed)"
          isChecked
          isLoading
        />
        <SMARTCheckbox
          isChecked
          label="Are we going to use use trygno-ui components?"
          message="Yes, for now. We are likely to merge to nordic design system in the future."
          state="success"
        />
        <SMARTCheckbox
          isChecked
          label="Are we going to use stencilJS for core design systems/ recipie components?"
          message="Yes, for now."
          state="success"
        />
      </Box>
      <br />
      <Appear>
        <Box>
          <p-inline-notification
            heading="Where can I get started?"
            heading-tag="h3"
            description="Start with consuming @tryg/style-tokens, @tryg/fonts, @tryg-utils"
          ></p-inline-notification>
          <br />
        </Box>
        <Box>
          <p-tag color="notification-info-soft" style={{ marginRight: "1rem" }}>
            <p-link-pure href="https://gitlab.devops.prdroot.net/service/designops/tryg-font">
              Tryg Fonts
            </p-link-pure>
          </p-tag>
          <p-tag color="notification-info-soft" style={{ marginRight: "1rem" }}>
            <p-link-pure href="https://gitlab.devops.prdroot.net/service/designops/style-tokens">
              Style tokens
            </p-link-pure>
          </p-tag>
          <p-tag color="notification-info-soft">
            <p-link-pure href="https://gitlab.devops.prdroot.net/service/jee/change-calculator/tryg-utils">
              Tryg utils
            </p-link-pure>
          </p-tag>

          <br />
          <br />
          <Appear>
            <p-inline-notification
              heading="Disucss/Support/Bugs/Further development/who?"
              heading-tag="h3"
            ></p-inline-notification>
            <br />
            <Appear>
              <CodePane language="tsx" theme={customTheme}>
                {` 
                // Contributions are ALWAYS encouraged 
                // ELSE  

                 return useYourBestEstimate(TASK) <= 1 HOUR ? ContactDirectly(Teams| Email) : CreateJIRATicket(PST)
                `}
              </CodePane>
            </Appear>
          </Appear>
        </Box>
      </Appear>
    </Appear>
  );
};

export default NordicDesignSystem;
