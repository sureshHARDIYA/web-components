import { Appear } from "spectacle";

const Summary = () => {
  return (
    <div>
      <Appear>
        <p-inline-notification
          heading="Start with Style tokens"
          heading-tag="h3"
        ></p-inline-notification>
      </Appear>
      <br />
      <Appear>
        <p-inline-notification
          heading="Think mobile first design"
          heading-tag="h3"
        ></p-inline-notification>
      </Appear>
      <br />
      <Appear>
        <p-inline-notification
          heading="Always remember: your JavaScript code runs in the browser not in server."
          heading-tag="h3"
        ></p-inline-notification>
      </Appear>
      <br />
      <Appear>
        <p-inline-notification
          heading="Accessibility  first"
          heading-tag="h3"
        ></p-inline-notification>

        <p-link-pure href="https://trygno-ui.netlify.app/">
          Storybook - https://trygno-ui.netlify.app/
        </p-link-pure>
      </Appear>
    </div>
  );
};

export default Summary;
