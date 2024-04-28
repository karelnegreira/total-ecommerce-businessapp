import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";


interface DashboadPageProps {
  params: {storeId: string}
} 

const DashboardPage: React.FC<DashboadPageProps> = async ({params}) => {
  
  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading title="Dashboard" description="Overview your store"/>
          <Separator/>
        </div>
    </div>
  );
}

export default DashboardPage;