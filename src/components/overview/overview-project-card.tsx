import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import OverviewProjectCardDropdown from "./overview-project-card-dropdown";
import { Github } from "lucide-react";
import { GitBranch } from "lucide-react";
import Terraless from "@/../public/terralesslogo.png";
import Image from "next/image";
const OverviewProjectCard = () => {
  return (
    <Card className="hover:border-gray-600 hover:cursor-pointer transition duration-300">
      <CardHeader className="flex flex-row justify-between pl-8 pr-4 py-4">
        <div className="flex flex-row gap-4 items-center">
          <Image 
          src={Terraless}
          alt="website logo"
          className="w-8 rounded-sm"
          />
          <div>
            <CardTitle>Terraless</CardTitle>
            <CardDescription>terraless.terraless.app</CardDescription>
          </div>
        </div>
        <OverviewProjectCardDropdown />
      </CardHeader>
      <CardContent className="pb-3">
        <Badge
          variant="secondary"
          className="font-normal text-sm px-3 py-1 rounded-xl"
        >
          <Github /> AdrianGallano/Terraless
        </Badge>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-zinc-400 text-sm">Add project cards</p>
        <div className="text-zinc-400 text-sm flex gap-1 items-center">
          <span>2/20/2025 on</span>
          <GitBranch size={15} /> 
          <span className="text-white">main</span>
        </div>
          
      </CardFooter>
    </Card>
  );
};

export default OverviewProjectCard;
