"use client"
//Dependencies
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
//Utilities
import { caesarCipher } from "@/utils/caesarCipher";
//Components UI
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
//Icons
import { FrameIcon, WidthIcon, LockClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons"

const FormSchema = z.object({
    message: z.string()
        .min(3, {
            message: "The message must be at least 3 characters.",
        })
        .max(160, {
            message: "The message must not be longer than 30 characters.",
        }),
    shift: z.number()
        .min(1, {
            message: "The shift must be at least 1.",
        })
        .max(25, {
            message: "The shift must not be longer than 25.",
        }),
    direction: z.string()
        // Solo aceptar dos valores (right or left)
        .refine(value => value === "right" || value === "left", {
            message: "The direction must be right or left.",
        }),
})

export function MessageForm({Label, Placeholder, isLocked}: {Label: string, Placeholder: string, isLocked: boolean}) {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit() {
        const { message } = form.getValues()
        alert(message)
    }

    function encryptMessage() {
        const { message } = form.getValues()
        alert(caesarCipher(message, "right", 3))
    }

    function decryptMessage() {
        const { message } = form.getValues()
        alert(caesarCipher(message, "left", 3))
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
                                            {/*Cambiar a popover*/}
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button>
                                                        Shift <FrameIcon className="ml-2 h-4 w-4" color="#EFFFFA" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                    <div className="grid gap-4">
                                                        <div className="space-y-2">
                                                            <h4 className="font-medium leading-none">Shift</h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                Set the shift value for the Caesar cipher.
                                                            </p>
                                                        </div>
                                                        <div className="grid gap-2">
                                                            <div className="grid grid-cols-3 items-center gap-4">
                                                                <Label htmlFor="shift">Shift</Label>
                                                                <FormField
                                                                    control={form.control}
                                                                    name="shift"
                                                                    render={({ field }) => (
                                                                        <Input
                                                                            id="shift"
                                                                            type="number"
                                                                            defaultValue={3}
                                                                            className="col-span-2 h-8"
                                                                            {...field}
                                                                        />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                            <Button
                                                type="reset"
                                            >
                                                Direction <WidthIcon className="ml-2 h-4 w-4" color="#EFFFFA"/>
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                type="button"
                                                size="icon"
                                                onClick={ isLocked ? encryptMessage : decryptMessage }
                                            >
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