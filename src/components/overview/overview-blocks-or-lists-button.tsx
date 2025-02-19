import {  TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, List } from "lucide-react";
const OverviewBlocksOrListsButton = () => {
  return (
      <TabsList className="h-full w-[135px]">
        <TabsTrigger className="h-full w-full" value="block"><LayoutDashboard /></TabsTrigger>
        <TabsTrigger className="h-full w-full" value="list"><List /></TabsTrigger>
      </TabsList>
  );
};

export default OverviewBlocksOrListsButton;
