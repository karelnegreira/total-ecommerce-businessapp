"use client";

import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import  * as z  from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";

interface StoreSettingsProps {
    initialData: Store;
}

const formSchema = z.object({
    name: z.string().min(1)
});

type SettingsFromValues = z.infer<typeof formSchema>;

const SettingsForm: React.FC<StoreSettingsProps> = ({initialData}) => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<SettingsFromValues>({
        resolver: zodResolver(formSchema), 
        defaultValues: initialData
    });

    const onSubmit = async (data: SettingsFromValues) => {
        console.log(data);
    }

  return (
    <>
        <div className="flex items-center justify-between">
            <Heading title="Settings" description="Manage store preferences" />
            <Button variant="destructive" size="sm" onClick={() => {}}>
                <Trash className="h-4 w-4"/>
            </Button>
        </div>
        <Separator />
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <div className="grid grid-cols-3 gap-8">
                    <FormField 
                        control={form.control} 
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    </>
  )
}

export default SettingsForm;