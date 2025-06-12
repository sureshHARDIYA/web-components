import { Appear, Quote } from "spectacle";

const UniversalDesign = () => {
  return (
    <div>
      <Appear>
        <Quote color="black" fontSize="30px">
          Universal design is the design of buildings, <kbd>products</kbd> or
          environments to make them accessible to people, regardless of age,
          disability, or other factors.
        </Quote>
      </Appear>

      <Appear>
        <Quote color="black" fontSize="30px">
          Accessibility is the design of <kbd>products</kbd>, devices, services,
          vehicles, or environments so as to be usable by disabled people.
        </Quote>
      </Appear>
    </div>
  );
};

export default UniversalDesign;
