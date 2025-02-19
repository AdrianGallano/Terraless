import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerCustom,
} from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react";

const OverviewAddNewButton = () => {
  return (
    <Select defaultValue="Add New...">
      <SelectTriggerCustom  className="relative h-full w-[180px] text-black bg-white text-nowrap" >
        <strong>Add New...</strong>
        <ChevronDownIcon className="size-4 text-black" />

        {/* <span className="absolute right-5 text-black peer-focus:text-black">
          ▼
        </span> */}
      </SelectTriggerCustom>
      <SelectContent>
        <SelectItem value="project">Project</SelectItem>
        <SelectItem value="domain">Domain</SelectItem>
        <SelectItem value="store">Store</SelectItem>
        <SelectItem value="team-member">Team Member</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default OverviewAddNewButton;
