
"use client";

import { Plus } from "lucide-react";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { BillboardsColumn } from "./columns";

interface BillboardClientProps {
    data: BillboardsColumn[]
}


export const BillboardClient: React.FC<BillboardClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();

  return (
    <>
        <div className="flex items-center justify-between">
            <Heading 
                title={`Billboard (${data.length})`}
                description="Manage the billboards of your store"
            />
            <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className="mr-2 h-4 w-4" />
                Add New
            </Button>
        </div>
        <Separator />
    </>

  )
}

