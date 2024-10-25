import { ListItem, OrderedList } from "spectacle";

const Publishing = () => {
  return (
    <div className="text-black">
      <OrderedList>
        <ListItem className="text-black text-sm">
          - run <kbd>npm run build</kbd>
        </ListItem>
        <ListItem className="text-black text-sm">
          - increase package version. We follow semantic versioning rules. For
          bugfix/hotfix or minor change use patch version
        </ListItem>
        <ListItem className="text-black text-sm">
          - Then push your changes into main.
        </ListItem>
        <ListItem className="text-black text-sm">
          - Create new tag from GitLab. Once tag is created, and pipeline has
          passed, it should be published to Nexus
        </ListItem>
      </OrderedList>
      <p-link-pure
        href="https://gitlab.devops.prdroot.net/service/jee/change-calculator/trygno-ui#publishing-packages"
        className="mt-8"
      >
        Documented in the repository
      </p-link-pure>
    </div>
  );
};

export default Publishing;
