import { Appear, CodePane, ListItem, OrderedList } from "spectacle";
import { customTheme } from "../7/customTheme";

const UsingComponents = () => {
  return (
    <div className="text-black">
      <OrderedList>
        <Appear>
          <ListItem className="text-black">
            Method 1: Can be consumed as web-components.
          </ListItem>
          <Appear>
            <CodePane language="bash">{`npm install @trygno/core-ui`}</CodePane>
          </Appear>
          <Appear>
            <h1 className="text-black text-sm mt-6 mb-2">
              Register web components
            </h1>
            <CodePane language="jsx" theme={customTheme}>{`
                import {
                defineCustomElements,
                JSX as LocalJSX,
                } from "@trygno/core-ui/dist/loader";
                import { HTMLAttributes,  } from "vue"; 

                type StencilToReact<T> = {
                [P in keyof T]?: T[P] &
                    Omit<HTMLAttributes, "className"> & {
                    class?: string;
                    };
                };
                declare global {
                export namespace JSX {
                    interface IntrinsicElements
                    extends StencilToReact<LocalJSX.IntrinsicElements> {}
                }
                }

                defineCustomElements(window);

            `}</CodePane>
          </Appear>
        </Appear>
      </OrderedList>
    </div>
  );
};

export default UsingComponents;
