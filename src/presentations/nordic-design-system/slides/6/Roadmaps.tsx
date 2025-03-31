import { Appear, Heading } from "spectacle";

const RoadMaps = () => {
  return (
    <div className="text-black flex gap-4 flex-col">
      <Appear>
        <p-checkbox-wrapper label="@tryno/style-tokens" hide-label="false">
          <input type="checkbox" name="some-name" checked onChange={() => {}} />
        </p-checkbox-wrapper>
      </Appear>
      <Appear>
        <p-checkbox-wrapper label="@tryg/fonts" hide-label="false">
          <input type="checkbox" name="some-name" checked onChange={() => {}} />
        </p-checkbox-wrapper>
      </Appear>
      <Appear>
        {" "}
        <p-checkbox-wrapper label="@tryg/utils">
          <input type="checkbox" name="some-name" checked onChange={() => {}} />
        </p-checkbox-wrapper>
      </Appear>
      <Appear>
        <p-checkbox-wrapper label="@tryg/icons" loading="true">
          <input type="checkbox" name="some-name" checked onChange={() => {}} />
        </p-checkbox-wrapper>
      </Appear>
      <Appear>
        <p-checkbox-wrapper label="@tryg/illustrations" loading="true">
          <input type="checkbox" name="some-name" checked onChange={() => {}} />
        </p-checkbox-wrapper>
      </Appear>
      <Appear>
        <p-checkbox-wrapper label="@tryg/ui-library (anchor)" loading="true">
          <input type="checkbox" name="some-name" checked onChange={() => {}} />
        </p-checkbox-wrapper>
      </Appear>
      <Appear>
        <Appear>
          <Heading fontSize={45}>Norwegian</Heading>
          <p-checkbox-wrapper label="@trygno/ui" hide-label="false">
            <input
              type="checkbox"
              name="some-name"
              checked
              onChange={() => {}}
            />
          </p-checkbox-wrapper>
          <br />
        </Appear>
        <Appear>
          <p-checkbox-wrapper label="Recipe (Shared Components)">
            <input type="checkbox" name="some-name" checked />
          </p-checkbox-wrapper>
          <br />
        </Appear>
        <Appear>
          <p-checkbox-wrapper label="Smart Components/Widgets">
            <input type="checkbox" name="some-name" />
          </p-checkbox-wrapper>
        </Appear>
      </Appear>
    </div>
  );
};

export default RoadMaps;
