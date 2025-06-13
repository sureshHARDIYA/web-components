import { CodePane, Image } from "spectacle";

import Screens from "./screen.jpg";
import { customTheme } from "@/slides/7/customTheme";

const ScreenReaders = () => {
  return (
    <div className="">
      <p-tabs size="medium">
        <p-tabs-item label="Screen Readers">
          <p-text size="medium">
            Screen readers convert digital text into synthesized speech. They
            empower users to hear content and navigate with the keyboard.
          </p-text>
        </p-tabs-item>
        <p-tabs-item label="What does it read?">
          <p-text size="medium">
            Screen Readers:
            <p-text-list>
              <p-text-list-item>Read all content</p-text-list-item>
              <p-text-list-item>Display a list of links</p-text-list-item>
              <p-text-list-item>Display a list of headings</p-text-list-item>
            </p-text-list>
          </p-text>
        </p-tabs-item>
        <p-tabs-item label="Popular Screen Readers">
          <Image src={Screens} className="pb-4" />
        </p-tabs-item>
        <p-tabs-item label="Alternative Text">
          <div className="flex w-full items-center mb-4">
            <p-icon></p-icon> By default, when a screen reader encounters an
            image, if it can't find alt text it will read aloud the file's name.
          </div>
          <CodePane language="html" theme={customTheme}>
            {`
            <!-- Screen reader will read the filename "image.jpg" 
            or may announce it as "graphic" depending on the browser/screen reader -->
            <img src="image.jpg">

            <!-- Screen reader will read: "a puppy in the park" -->
            <img src="image.jpg" alt="a puppy in the park">

            <!-- Screen reader will skip this image entirely -->
            <img src="image.jpg" alt="">

            `}
          </CodePane>
        </p-tabs-item>
      </p-tabs>
    </div>
  );
};

export default ScreenReaders;
