"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { RulerHorizontalIcon, WidthIcon, LockClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons"

const FormSchema = z.object({
    message: z
        .string()
        .min(3, {
            message: "The message must be at least 3 characters.",
        })
        .max(160, {
            message: "The message must not be longer than 30 characters.",
        }),
})

export function MessageForm({Label, Placeholder, isLocked}: {Label: string, Placeholder: string, isLocked: boolean}) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(JSON.stringify(data, null, 2))
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl font-heading">{Label}</FormLabel>
                            <FormControl>
                                <div className="border-foreground border rounded-md px-3 py-2 flex flex-col gap-5 bg-background">
                                    <Textarea
                                        placeholder={Placeholder}
                                        className="resize-none"
                                        {...field}>
                                    </Textarea>
                                    <div className="flex justify-between">
                                        <div className="flex gap-4">
                                            <Button>
                                                Length <RulerHorizontalIcon className="ml-2 h-4 w-4" color="#EFFFFA" />
                                            </Button>
                                            <Button>
                                                Direction <WidthIcon className="ml-2 h-4 w-4" color="#EFFFFA"/>
                                            </Button>
                                        </div>
                                        <div>
                                            <Button type="submit" size="icon">
                                                {isLocked ? <LockClosedIcon className="h-4 w-4" color="#EFFFFA"/> : <LockOpen1Icon className="h-4 w-4" color="#EFFFFA"/>}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

            </form>
        </Form>
    )
}