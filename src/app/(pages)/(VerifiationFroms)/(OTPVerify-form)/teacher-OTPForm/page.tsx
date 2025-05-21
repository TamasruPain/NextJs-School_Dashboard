"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Link from "next/link"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

export default function teacherOTPForm() {

    const [progress, setProgress] = useState(0)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    // otp pregress---------------------------
    const pinValue = form.watch("pin")

    useEffect(() => {
        const length = pinValue?.length || 0
        setProgress((length / 6) * 100)
    }, [pinValue])
    // ---------------------------------------

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast.success("OTP submitted: " + data.pin)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('/images/5483827.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            {/* otp form */}
            <div className="backdrop-blur-xl font-bold text-black rounded-box w-xs hover:shadow-md shadow-sky-400 p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="mb-6">
                            <h1 className="text-2xl">
                                One-Time Password
                            </h1>
                        </div>
                        <div className="mt-3">
                            <span className="text-sm text-gray-600 ">
                                Please enter the OTP sent to your email.
                            </span>
                        </div>
                        <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>One-Time Password</FormLabel>
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <progress className="progress progress-primary" value={progress} max="100"></progress>
                        <Link href={"/teacher-passwordForm"} className="btn btn-outline btn-ghost w-full" type="submit">Submit</Link>
                    </form>
                </Form>
            </div>

        </div>

    )
}
