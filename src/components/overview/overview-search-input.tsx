import { Search } from "lucide-react";
import { Input } from "../ui/input";


const OverviewSearchInput = () => {
  return (
  <>
  <div className="flex relative h-full w-full">
    <Input type="text" className="pl-10 h-full" placeholder="Search Repositories an Projects..." />
    <Search className="absolute translate-x-2.5 translate-y-[50%] transition duration-300 focus-visible:outline-gray-600" color="gray" height={18} />
  </div>
  </>
  );
};

export default OverviewSearchInput;
