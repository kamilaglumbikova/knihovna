// @typescript-eslint/no-empty-object-type
"use client";

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { bookSchema } from '@/lib/validations'
import { toast } from '@/hooks/use-toast';
import { createBook } from '@/lib/admin/actions/book';

const BookForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: '',
      author: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {
    const result = await createBook(values);

    if (result.success) {
      toast({
        title: 'Success',
        description: 'Kniha přidána'
      });

      router.push(`/admin`);
    } else {
      toast({
        title: 'Error',
        description: 'Zkuste to znovu',
        variant: 'destructive'
      })
    }
  }
  return (
    <div className='w-full max-w-2xl'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name={"title"}
            render={({ field }) => (
              <FormItem className='flex flex-col gap-1'>
                <FormLabel className='text-base font-normal text-dark-500'>Název</FormLabel>
                <FormControl>
                  <Input required placeholder='Název' {...field} className='book-form_input' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"author"}
            render={({ field }) => (
              <FormItem className='flex flex-col gap-1'>
                <FormLabel className='text-base font-normal text-dark-500'>Autor</FormLabel>
                <FormControl>
                  <Input required placeholder='Autor' {...field} className='book-form_input' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='book-form_btn text-white'>
            Přidat knihu
          </Button>
        </form>
      </Form>
    </div>

  )
}

export default BookForm