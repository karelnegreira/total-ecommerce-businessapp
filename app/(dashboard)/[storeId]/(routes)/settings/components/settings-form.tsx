"use client";

import { Store } from "@prisma/client";

interface StoreSettingsProps {
    initialData: Store;
}


const SettingsForm: React.FC<StoreSettingsProps> = ({initialData}) => {
  return (
    <div>
        Settings Form 
    </div>
  )
}

export default SettingsForm;