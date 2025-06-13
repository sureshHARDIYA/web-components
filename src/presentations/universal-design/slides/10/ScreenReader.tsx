import { Image } from "spectacle";

import Screens from "./screen.jpg";

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
          <span className="font-bold underline pb-6">
            Popular Screen Readers
          </span>
          <Image src={Screens} className="pb-4" />
        </div>
      </p-carousel>
    </div>
  );
};

export default ScreenReaders;
