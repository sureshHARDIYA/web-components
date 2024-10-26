const WidgetsWithStencil = () => {
  return (
    <div className="text-black w-full">
      <p-carousel heading="Can we create widgets with Stencil JS?">
        <PSlide>
          It has <kbd className="ml-1 mr-1 text-green-800">stencil-router</kbd>{" "}
          for routing.
        </PSlide>
        <PSlide>
          State management
          <kbd className="ml-1 mr-1 text-green-800">stencil-store</kbd> for
          state management.
        </PSlide>
        <PSlide>
          Supports tailwind
          <kbd className="ml-1 mr-1 text-green-800">
            stencil-tailwind-plugin
          </kbd>
        </PSlide>
        <PSlide>
          Supports <kbd className="ml-1 mr-1 text-green-800">SSR</kbd>
        </PSlide>
      </p-carousel>
    </div>
  );
};

export default WidgetsWithStencil;

const PSlide = ({ children }: any) => {
  return (
    <div className="bg-red-200 p-4 min-h-20 flex justify-center items-center">
      {children}
    </div>
  );
};
