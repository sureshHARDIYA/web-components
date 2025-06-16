import { TTD, TTR, TTable } from "@/components/Shared/Table";
import { Appear } from "spectacle";

const Agenda2 = () => {
  return (
    <Appear>
      <TTable color="secondary" id="owasp">
        <tbody>
          <TTR>
            <TTD>Keyboard-Only & Tabbing</TTD>
            <TTD>The tabindex attribute and tab trapping</TTD>
          </TTR>
          <TTR>
            <TTD>ARIA Labels & Descriptions</TTD>
            <TTD>
              behavior of ARIA labels and descriptions and the differences
              between the WAI-ARIA and WCAG specs
            </TTD>
          </TTR>
          <TTR>
            <TTD>ARIA Roles & Live Regions</TTD>
            <TTD>
              ARIA roles can be applied to elements, giving screen readers a
              context for their use
            </TTD>
          </TTR>
          <TTR>
            <TTD>Accessibility Tools</TTD>
            <TTD>
              several accessibility tools for running manual accessibility tests
              or automating tests within a CI/CD pipeline.
            </TTD>
          </TTR>
          <TTR>
            <TTD>More on UU</TTD>
            <TTD>Resources and courses on Universal Design </TTD>
          </TTR>
          <TTR>
            <TTD>Wrapping up with styling web components</TTD>
            <TTD>How to style web components </TTD>
          </TTR>
        </tbody>
      </TTable>
    </Appear>
  );
};

export default Agenda2;
