import { Appear, CodePane, SlideLayout } from "spectacle";

const LeftComponet = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-black">
      <h1 className="text-4xl font-bold">A new web component</h1>
    </div>
  );
};

const RightComponet = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-black">
      <Appear>
        <h1 className="text-4xl font-bold">Right Component</h1>
      </Appear>
    </div>
  );
};

const FreshComponent = () => {
  return (
    <div id="treeWrapper" className="w-full h-screen bg-gray-50 p-4">
      <SlideLayout.TwoColumn
        backgroundColor="white"
        backgroundImage="url(https://play.tailwindcss.com/img/beams.jpg)"
        left={<LeftComponet />}
        right={<RightComponet />}
      ></SlideLayout.TwoColumn>
    </div>
  );
};

export default FreshComponent;
