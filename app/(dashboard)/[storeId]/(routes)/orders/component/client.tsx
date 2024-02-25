
"use client";

import { Plus } from "lucide-react";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";


interface OrderClientProps {
    data: OrderColumn[]
}


export const OrderClient: React.FC<OrderClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();

  return (
    <>
        <Heading 
            title={`Orders (${data.length})`}
            description="Manage the orders of your store"
        />
        <Separator />
        <DataTable searchKey="products" columns={columns} data={data} />
    </>

  )
}

