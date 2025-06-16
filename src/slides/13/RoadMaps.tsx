const RoadMaps = () => {
  return (
    <div className="text-black flex gap-4 flex-col">
      <p-checkbox-wrapper
        label="Initial Implementation of core components"
        hide-label="false"
      >
        <input type="checkbox" name="some-name" checked onChange={() => {}} />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper
        label="Start using built components - in Vue (Endre, PIA)"
        hide-label="false"
      >
        <input type="checkbox" name="some-name" checked onChange={() => {}} />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper label="Host storybook -https://trygno-ui.dev.jee.prd1.prdroot.net/">
        <input type="checkbox" name="some-name" checked onChange={() => {}} />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper
        label="Add more web-components / shared components"
        loading="true"
      >
        <input type="checkbox" name="some-name" checked onChange={() => {}} />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper
        label="Fix UD issues in components / based on INCLUD report"
        loading="true"
      >
        <input type="checkbox" name="some-name" checked onChange={() => {}} />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper label="Externalize CSS variables/Style tokens">
        <input type="checkbox" name="some-name" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper label="Theme provider - Tryg / Enter / NITO / etc">
        <input type="checkbox" name="some-name" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper label="Automated Testing">
        <input type="checkbox" name="some-name" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper label="Automated Accessibility  Testing">
        <input type="checkbox" name="some-name" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper label="Prepare components for SSR">
        <input type="checkbox" name="some-name" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper label="May be Open-source it">
        <input type="checkbox" name="some-name" />
      </p-checkbox-wrapper>
    </div>
  );
};

export default RoadMaps;
