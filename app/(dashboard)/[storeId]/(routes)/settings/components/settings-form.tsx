"use client";

import Heading from "@/components/ui/heading";
import { Store } from "@prisma/client";

interface StoreSettingsProps {
    initialData: Store;
}


const SettingsForm: React.FC<StoreSettingsProps> = ({initialData}) => {
  return (
    <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store preferences" />
    </div>
  )
}

export default SettingsForm;