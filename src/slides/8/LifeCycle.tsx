import { useState } from "react";

const STATE: any = {
  componentDidLoad: {
    title: "componentDidLoad",
    description:
      "Called once just after the component is fully loaded and the first render() occurs.",
  },
  componentDidUpdate: {
    title: "componentDidUpdate",
    description:
      "Called just after the component updates. It's never called during the first render().",
  },
  disconnectedCallback: {
    title: "disconnectedCallback",
    description:
      "Called every time the component is disconnected from the DOM, ie, it can be dispatched more than once",
  },
  connectedCallback: {
    title: "connectedCallback",
    description:
      "Called every time the component is connected to the DOM. When the component is first connected, this method is called before componentWillLoad.",
  },
  componentWillLoad: {
    title: "componentWillLoad",
    description:
      "Called once just after the component is first connected to the DOM. Since this method is only called once, it's a good place to load data asynchronously and to setup the state without triggering extra re-renders.",
  },
  componentWillUpdate: {
    title: "componentWillUpdate",
    description:
      "Called when the component is about to be updated because some Prop() or State() changed. It's never called during the first render().",
  },
};

const LifeCycle = () => {
  const [activeState, setActiveState] = useState<any>(null);

  const handleClick = (key: string) => {
    const modal = document.querySelector("p-modal");

    const currentState = STATE[key] as any;

    setActiveState(currentState);

    if (modal) {
      modal.setAttribute("open", "true");
      modal.addEventListener("dismiss", () =>
        modal.setAttribute("open", "false")
      );
    }
  };

  return (
    <div className="text-black h-full w-full max-h-full">
      <p-modal open="false" aria="{ 'aria-label': 'Some Heading' }">
        <p-heading slot="header" size="large" tag="h2">
          {activeState?.title}
        </p-heading>
        <p-text>{activeState?.description}</p-text>
      </p-modal>
      <svg
        version="1.1"
        viewBox="0 0 642.5 922"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full max-h-full"
      >
        <g fillRule="evenodd">
          <g fill="none" strokeLinecap="square">
            <path
              d="m552 743c49.706 0 90-40.294 90-90v-488c0-58.5-47.2-106-105.5-106-58.393 0.16547-105.61 47.607-105.5 106l0.4 68"
              stroke="#7b83a6"
              className="pathUpdate_VwyZ"
            ></path>
            <path
              d="m437.7 600.3-6.3 6.3-6.3-6.3"
              stroke="#b3b6c5"
              className="pathUpdate_VwyZ"
            ></path>
            <path
              d="m431.4 347.5v258"
              stroke="#7b83a6"
              className="pathUpdate_VwyZ"
            ></path>
            <path
              d="m431.4 282.5v24.337"
              stroke="#7b83a6"
              strokeDasharray="1, 6"
              className="pathUpdate_VwyZ"
            ></path>
            <path
              d="m126.4 50v555.5"
              stroke="#212431"
              className="pathInit_un9K"
            ></path>
            <path
              d="m132.7 600.3-6.3 6.3-6.3-6.3"
              stroke="#212431"
              className="pathInit_un9K"
            ></path>
            <path
              d="m278 50v27.5"
              stroke="#575e7f"
              className="pathAttached_CXQN"
            ></path>
            <path
              d="m284.3 71.993-6.3 6.3-6.3-6.3"
              stroke="#575e7f"
              className="pathAttached_CXQN"
            ></path>
            <path
              d="m278.5 829v29.5"
              stroke="#575e7f"
              className="pathRemoved_epzo"
            ></path>
            <path
              d="m284.8 852.3-6.3 6.3-6.3-6.3"
              stroke="#575e7f"
              className="pathRemoved_epzo"
            ></path>
            <g
              fontFamily="SFMono-Regular, 'SF Mono', 'Lucida Console', monospace"
              fontSize="15px"
            >
              <g>
                <a
                  onClick={() => handleClick("componentDidLoad")}
                  className="pathInit_un9K cursor-pointer"
                >
                  <rect
                    y="620"
                    width="252"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#212431"
                  ></rect>
                  <text x="2.2028809" y="166.83597" fill="#fff">
                    <tspan x="45.202881" y="648.83594">
                      componentDidLoad()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  onClick={() => handleClick("componentDidUpdate")}
                  className="pathUpdate_VwyZ cursor-pointer"
                >
                  <rect
                    x="303"
                    y="620"
                    width="252"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#7b83a6"
                  ></rect>
                  <text x="2.8501587" y="166.83597" fill="#fff">
                    <tspan x="339.15015" y="648.83594">
                      componentDidUpdate()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  onClick={() => handleClick("disconnectedCallback")}
                  className="pathRemoved_epzo cursor-pointer"
                >
                  <rect
                    x="152.5"
                    y="873"
                    width="252"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#4b516e"
                  ></rect>
                  <text x="-18.570755" y="148.19852" fill="#fff">
                    <tspan x="179.72925" y="902.19849">
                      disconnectedCallback()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  className="pathUpdate_VwyZ"
                  href="/docs/reactive-data#the-watch-decorator-watch"
                >
                  <rect
                    x="303"
                    y="161"
                    width="252"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#7b83a6"
                  ></rect>
                  <text x="2.5288086" y="-8" fill="#fff">
                    <tspan x="348.52881" y="190">
                      @Watch(‘propName’)
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  className="pathInit_un9K pathUpdate_VwyZ"
                  href="https://stenciljs.com/docs/templating-jsx"
                  target="_blank"
                >
                  <rect
                    y="451"
                    width="555"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#39b54a"
                  ></rect>
                  <text x="1.035553" y="109.1985" fill="#fff">
                    <tspan x="241.43555" y="480.19852">
                      render()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  onClick={() => handleClick("connectedCallback")}
                  className="pathInit_un9K pathAttached_CXQN cursor-pointer"
                >
                  <rect
                    x="65"
                    y="89"
                    width="275"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#4b516e"
                  ></rect>
                  <text x="78.77652" y="26.198486" fill="#fff">
                    <tspan x="117.17651" y="118.19849">
                      connectedCallback()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a href="#componentshouldupdate" className="pathUpdate_VwyZ">
                  <rect
                    x="303"
                    y="233"
                    width="252"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#7b83a6"
                  ></rect>
                  <text x="-6.5288005" y="2.8359385" fill="#fff">
                    <tspan x="325.57117" y="261.83594">
                      componentShouldUpdate()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  href="#componentwillrender"
                  className="pathInit_un9K pathUpdate_VwyZ"
                >
                  <rect
                    x="77.5"
                    y="377"
                    width="400"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#4b516e"
                  ></rect>
                  <text x="-148.97623" y="146.83594" fill="#fff">
                    <tspan x="183.12378" y="405.83594">
                      componentWillRender()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  onClick={() => handleClick("componentWillUpdate")}
                  className="pathUpdate_VwyZ cursor-pointer"
                >
                  <rect
                    x="303"
                    y="305"
                    width="252"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#7b83a6"
                  ></rect>
                  <text x="2.5237732" y="74.835938" fill="#fff">
                    <tspan x="334.62378" y="333.83594">
                      componentWillUpdate()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  href="#componentdidrender"
                  className="pathInit_un9K pathUpdate_VwyZ"
                >
                  <rect
                    x="77.5"
                    y="523"
                    width="400"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#4b516e"
                  ></rect>
                  <text x="-144.44986" y="292.83597" fill="#fff">
                    <tspan x="187.65015" y="551.83594">
                      componentDidRender()
                    </tspan>
                  </text>
                </a>
              </g>
              <g>
                <a
                  onClick={() => handleClick("componentWillLoad")}
                  className="pathInit_un9K cursor-pointer"
                >
                  <rect
                    y="161"
                    width="252"
                    height="49"
                    rx="24.5"
                    ry="24.5"
                    fill="#212431"
                  ></rect>
                  <text x="2.2765121" y="97.835938" fill="#fff">
                    <tspan x="40.676514" y="189.83594">
                      componentWillLoad()
                    </tspan>
                  </text>
                </a>
              </g>
            </g>
            <g fontSize="14px" letterSpacing="-.2" textAnchor="middle">
              <g className="trigger path-init">
                <rect
                  width="190"
                  height="50"
                  rx="4"
                  ry="4"
                  fill="#fdf5e4"
                ></rect>
                <text x="111.24316" y="-1.0898438" fill="#9a6400">
                  <tspan x="95.239258" y="28.910156">
                    Component initialized
                  </tspan>
                </text>
              </g>
              <g className="trigger path-update">
                <rect
                  x="1"
                  y="718"
                  width="555"
                  height="50"
                  rx="4"
                  ry="4"
                  fill="#fdf5e4"
                ></rect>
                <text x="344.75723" y="166.90677" fill="#9a6400">
                  <tspan x="278.08643" y="746.90674">
                    Change in a value of prop or state triggers rerender
                  </tspan>
                </text>
              </g>
              <g className="trigger path-removed">
                <rect
                  x="1"
                  y="779"
                  width="555"
                  height="50"
                  rx="4"
                  ry="4"
                  fill="#fdf5e4"
                ></rect>
                <text x="138.02324" y="167.91019" fill="#9a6400">
                  <tspan x="278.73926" y="807.91016">
                    Component removed
                  </tspan>
                </text>
              </g>
              <g className="trigger path-attached">
                <rect
                  x="215"
                  width="190"
                  height="50"
                  rx="4"
                  ry="4"
                  fill="#fdf5e4"
                ></rect>
                <text x="330.85489" y="-1.0898438" fill="#9a6400">
                  <tspan x="310.23926" y="28.910156">
                    Component reattached
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LifeCycle;
