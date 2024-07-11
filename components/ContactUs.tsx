"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export default function ContactUs() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="space-y-6">
                            <div className="flex gap-3">
                                <Input type="text" placeholder="Your Name *" required className='bg-[var(--secondary)] px-4 h-12 border-none rounded-[4px]' />
                                <Input type="email" placeholder="Your Email *" required className='bg-[var(--secondary)] px-4 h-12 border-none rounded-[4px]' />
                                <Input type="email" placeholder="Your Phone *" required className='bg-[var(--secondary)] px-4 h-12 border-none rounded-[4px]' />
                            </div>
                            <Textarea placeholder="Your Message" required className='bg-[var(--secondary)] min-h-[200px] px-4 pt-3 border-none rounded-[4px]' />
                        </FormItem>
                    )}
                />
                <div className="text-end">
                    <Button size="lg" type="submit" className="bg-[var(--button)] text-white w-52 py-4 h-14 rounded-md">Send Massage</Button>
                </div>
            </form>
        </Form>
    )
}
