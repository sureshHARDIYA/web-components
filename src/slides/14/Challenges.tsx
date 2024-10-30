import { Appear } from "spectacle";

const Challenges = () => {
  return (
    <div className="text-black">
      <blockquote className="text-3xl italic font-semibold text-gray-900 dark:text-white">
        <svg
          className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Appear className="mt-8">Developing web components is easy;</Appear>
        <Appear className="mt-8 ml-16">
          Convincing people to adopt them is the real challenge.
        </Appear>
        {/* <Appear className="mt-8 ml-32 leading-16">
          Technology evolves quickly, but mindsets stay rooted in comfort zones,
          making adaptation difficult.
        </Appear> */}
      </blockquote>
    </div>
  );
};

export default Challenges;
