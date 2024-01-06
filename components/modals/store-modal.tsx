"use client";

import * as z from "zod";
import { useState } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";



const fromSchema = z.object({
    name: z.string().min(1), 
})

export const StoreModal = () => {

    const storeModal = useStoreModal();

    const [ loading, setLoading ] = useState(false);

    const form = useForm<z.infer<typeof fromSchema>>({
        resolver: zodResolver(fromSchema), 
        defaultValues: {
            name: "", 
        },
    });

    const onSubmit = async (values: z.infer<typeof fromSchema>) => {
        try {
            setLoading(true);

            const response = await axios.post('/api/stores', values);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);    
        }
    
    }

    return (
        <Modal
            title="Create store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {... form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>name</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="E-Commerce" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button disabled={loading} variant="outline" onClick={storeModal.onClose}>Cancel</Button>
                                <Button disabled={loading} type="submit" variant="destructive">Continue</Button>
                            </div>
                            
                            
                        </form>
                    </Form>
                </div>
            </div> 
        </Modal>
    );
};