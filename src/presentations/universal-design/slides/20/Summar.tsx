const Summary = () => {
  return (
    <div>
      <ul className="flex gap-6 flex-col color-blue-900">
        <li>
          <p-link-pure href="https://www.w3.org/WAI/standards-guidelines/wcag/">
            Web Content Accessibility Guidelines (WCAG)
          </p-link-pure>
        </li>
        <li>
          <p-link-pure href="https://webaim.org/">WebAIM</p-link-pure>
        </li>
        <li>
          <p-link-pure href="https://inclusive.microsoft.design/">
            Microsoft Inclusive Design
          </p-link-pure>
        </li>
        <li>
          <p-link-pure href="https://accessibility.day/">
            Global Accessibility Awareness Day
          </p-link-pure>
        </li>
        <li>
          <p-link-pure href="https://reactjs.org/docs/accessibility.html">
            Web App Accessibility (feat. React)
          </p-link-pure>
        </li>
      </ul>
    </div>
  );
};

export default Summary;
