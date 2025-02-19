import OverviewSortBySelection from "@/components/overview/overview-sort-by-selection";
import OverviewSearchInput from "../components/overview/overview-search-input";
import OverviewBlocksOrListsButton from "@/components/overview/overview-blocks-or-lists-button";
import OverviewBlocksOrListsContent from "@/components/overview/overview-blocks-or-lists-content";
import OverviewAddNewButton from "@/components/overview/overview-add-new-button";
import { Tabs } from "@/components/ui/tabs";
const Overview = () => {
  return (
    <Tabs defaultValue="block">
      <div className="px-8 py-5 h-22 flex items-center gap-5">
        <OverviewSearchInput />
        <OverviewSortBySelection />
        <OverviewBlocksOrListsButton />
        <OverviewAddNewButton />
      </div>
        <OverviewBlocksOrListsContent />
        
    </Tabs>
  );
};

export default Overview;
