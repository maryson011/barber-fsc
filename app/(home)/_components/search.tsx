'use client'
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { FormInput, SearchIcon } from "lucide-react"
import { Form, FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { FormControl, FormField, FormItem } from "@/app/_components/ui/form"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    search: z
        .string({
            required_error: "Campo obrigatório."
        })
        .trim()
        .min(1, "Campo obrigatório.")
})

const Search = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        router.push(`/barbershops?search=${data.search}`)
    }

    return (
        <FormProvider {...form}>
            <form 
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex items-center gap-2">

                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="Busque  por uma barbearia..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button variant="default" type="submit">
                    <SearchIcon size={18}/>
                </Button>
            </form>
        </FormProvider>
    )
}

export default Search