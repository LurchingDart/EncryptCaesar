import {FormField} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

export function ShiftForm() {
    return (
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
                        render={({field}) => (
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
    )
}