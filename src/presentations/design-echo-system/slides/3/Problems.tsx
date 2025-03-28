import { Appear, Box, Grid } from "spectacle";

export const SMARTCheckbox = ({
  label = "Default Label",
  isChecked = false,
  isLoading = false,
  state = "none",
  message,
}: {
  label: string;
  isChecked?: boolean;
  isLoading?: boolean;
  state?: "none" | "success" | "error";
  message?: string;
}) => {
  return (
    <Appear>
      <p-checkbox-wrapper
        label={label}
        hide-label="false"
        loading={isLoading}
        style={{ marginBottom: "1rem" }}
        message={message}
        state={state}
      >
        <input
          checked={isChecked}
          name="some-name"
          type="checkbox"
          onChange={() => {}}
        />
      </p-checkbox-wrapper>
    </Appear>
  );
};

const ProblemStatements = () => {
  return (
    <div className="text-black">
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={35} gridRowGap={4}>
        <Box p={5}>
          <SMARTCheckbox
            label="Keep up with JavaScript Frameworks (React VS Vue vs ....)"
            isChecked
          />
          <SMARTCheckbox label="Inconsistent UI across products" isChecked />
          <SMARTCheckbox label="Inconsistent User Experience" isChecked />
          <SMARTCheckbox
            label="Increased Development and Design Costs"
            isChecked
          />
          <SMARTCheckbox
            label="Difficult Maintenance and Scalability"
            isChecked
          />
          <SMARTCheckbox label="Universal Design Issues" isChecked />
          <SMARTCheckbox label="Quality Assurance Challenges" isChecked />
        </Box>
        <Appear>
          <Box backgroundColor="primary" p={10}>
            <SMARTCheckbox label="Delayed development/review/testing process" />
            <SMARTCheckbox
              label="Developer experience (DX) - web components vs Framework"
              message="React vs Vue wrappers - web components approach"
              state="error"
            />
            <SMARTCheckbox
              label="Expectation vs Reality"
              message="Required functionality/design vs Actual functionality/design"
              state="error"
            />

            <SMARTCheckbox
              label="Web components knowledge and working experience"
              message="shadowDOM, CSS encapsulation, etc"
              state="error"
            />

            <SMARTCheckbox label="Accessibility and UD issues" />

            <SMARTCheckbox label="Knowledge sharing / Pair programming" />
          </Box>
        </Appear>
        <Appear>
          <p-inline-notification
            heading="Frontend Enginner in Platform Team"
            heading-tag="h3"
            description="Design System Ecosystem / Widgets / FE community / FE security"
          ></p-inline-notification>
        </Appear>
      </Grid>
    </div>
  );
};

export default ProblemStatements;
