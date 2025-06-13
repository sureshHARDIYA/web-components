import { CodePane, Image } from "spectacle";

import Screens from "./screen.jpg";
import { customTheme } from "@/slides/7/customTheme";

const ScreenReaders = () => {
  return (
    <div className="">
      <p-carousel heading="Screen Readers">
        <div className="grid place-content-center h-[150px] bg-slate-200 p-4 text-black text-xl">
          Screen readers convert digital text into synthesized speech. They
          empower users to hear content and navigate with the keyboard.
        </div>
        <div className="grid place-content-center h-[150px] bg-slate-200 p-4 text-black text-xl">
          Screen Readers:
          <p-text-list>
            <p-text-list-item>Read all content</p-text-list-item>
            <p-text-list-item>Display a list of links</p-text-list-item>
            <p-text-list-item>Display a list of headings</p-text-list-item>
          </p-text-list>
        </div>
        <div className="grid place-content-center h-[370px] bg-slate-200 p-4 text-black text-xl">
          <span className="font-bold pb-6">Popular Screen Readers</span>
          <Image src={Screens} className="pb-4" />
        </div>

        <div className="grid place-content-center bg-slate-200 p-4 text-black text-xl">
          <span className="font-bold pb-6">Alternative Text</span>
          <div className="flex w-full items-center mb-4">
            <p-icon></p-icon> By default, when a screen reader encounters an
            image, if it can't find alt text it will read aloud the file's name.
          </div>
          <CodePane
            language="html"
            theme={customTheme}
            highlightRanges={[1, 9, [11, 13]]}
          >
            {`
            <!-- Screen reader will read the filename "image.jpg" or may announce it as 
            "graphic" depending on the browser/screen reader -->
            <img src="image.jpg">

            <!-- Screen reader will read: "a puppy in the park" -->
            <img src="image.jpg" alt="a puppy in the park">

            <!-- Screen reader will skip this image entirely -->
            <img src="image.jpg" alt="">

            `}
          </CodePane>
        </div>
      </p-carousel>
    </div>
  );
};

export default ScreenReaders;
