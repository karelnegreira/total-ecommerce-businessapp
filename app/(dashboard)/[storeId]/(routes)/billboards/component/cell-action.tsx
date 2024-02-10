"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import { BillboardColumn } from "./columns";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";


interface CellActionProps {
    data: BillboardColumn;
}

export const CellAction: React.FC<CellActionProps> = ({data,}) => {

    const router = useRouter();
    const params = useParams();

    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("Billboard id copied to the clipboard");
    };

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open Menu</span>
                <MoreHorizontal className="h-4 w-4"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>
                Actions
            </DropdownMenuLabel>
            <DropdownMenuItem onClick={() => onCopy(data.id)}>
                <Copy className="mr-2 h-4 w-4"/>
                    Copy Id
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push(`/${params.storeId}/billboards/${data.id}`)}>
                <Edit className="mr-2 h-4 w-4"/>
                    Update
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Trash className="mr-2 h-4 w-4"/>
                    Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};