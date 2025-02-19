import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerCustom,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react";

const OverviewSortBySelection = () => {
  return (
    <Select defaultValue="activity">
      <SelectTriggerCustom className="h-full w-[250px] text-nowrap">
        <SelectValue   />
        <ChevronDownIcon className="size-4" />
      </SelectTriggerCustom>
      <SelectContent>
        <SelectItem value="activity">Sort by activity</SelectItem>
        <SelectItem value="name">Sort by name</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default OverviewSortBySelection;
