import {format} from "date-fns";

import prismadb from "@/lib/prismadb";
import {BillboardClient} from "./component/client";
import { CategoryColumn } from "./component/columns";


const CategoryPage = async ({params}: {params: {storeId: string}}) => {
  const category = await prismadb.category.findMany({
    where: {
      storeId: params.storeId, 
    }, 
    include: {
      billboard: true, 
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedCategories: CategoryColumn[] = category.map((item) => (
    {
      id: item.id, 
      name: item.name, 
      billboardLabel: item.billboard.label, 
      createdAt: format(item.createdAt, "MMMM do, yyy")
    }
  ))

  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <BillboardClient data={formattedCategories} />
        </div>

    </div>
  )
}

export default CategoryPage;