import { Appear } from "spectacle";

const Compliance = () => {
  return (
    <div className="flex w-full flex-col">
      <Appear className="mt-4">
        <p-inline-notification
          heading="Web accessibility is a legal requirement ( European Accessibility Act (EAA))"
          heading-tag="h3"
          state="success"
          className="w-full"
          description="Applies to both public and private sectors."
        ></p-inline-notification>
      </Appear>
      <Appear className="mt-4">
        <p-inline-notification
          heading="Adopted: 2019, in effect from 28 June 2025"
          heading-tag="h3"
          state="error"
          className="w-full"
          description="Deadline for compliance: 28 June 2025"
        ></p-inline-notification>
      </Appear>

      <Appear className="mt-4">
        <p-inline-notification
          heading="Web Accessibility Directive (EU) 2016/2102"
          heading-tag="h3"
          state="info"
          className="w-full"
          description="Requires: Conformance to WCAG 2.1 Level AA"
        ></p-inline-notification>
      </Appear>

      <Appear className="mt-4">
        <p-inline-notification
          heading="Most EU countries have transposed the Web Accessibility Directive into national legislation."
          heading-tag="h3"
          state="info"
          className="w-full"
          description="Norway: Likestillings- og diskrimineringsloven (Equality and Anti-Discrimination Act)"
        ></p-inline-notification>
      </Appear>
    </div>
  );
};

export default Compliance;
