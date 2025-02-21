import { TabsContent } from "../ui/tabs";
import OverviewProjectCard from "./overview-project-card";

const OverviewBlocksOrListsContent = () => {
  return (
    <>
      <TabsContent
        className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6"
        value="block"
      >
        <OverviewProjectCard />
        <OverviewProjectCard />
        <OverviewProjectCard />
        <OverviewProjectCard />
        <OverviewProjectCard />
      </TabsContent>
      <TabsContent value="list">Hey</TabsContent>
    </>
  );
};

export default OverviewBlocksOrListsContent;
