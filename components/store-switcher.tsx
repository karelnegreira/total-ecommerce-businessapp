"use client";

import { PopoverTrigger } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Store } from "@prisma/client";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
    items: Store[];
};

export default function StoreSwitcher({className, items = []}: StoreSwitcherProps) {
    const storeModal = useStoreModal();
    
    return (
        <div>
            Store Switcher
        </div>
    );
};