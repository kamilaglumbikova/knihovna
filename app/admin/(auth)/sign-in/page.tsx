"use client";

import { signInSchema } from '@/lib/validations'
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
import { signInWithCredentials } from '@/lib/admin/actions/user';
import { toast } from '@/hooks/use-toast';
import { useRouter } from "next/navigation";
import Link from 'next/link';


const Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    const result = await signInWithCredentials(values);

    if (result.success) {
      toast({
        title: 'Success',
        description: 'Uživatel přihlášen'
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
    <div>
      <h2 className='font-semibold text-xl mb-3'>Přihlásit se</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem className='flex flex-col gap-1'>
                <FormLabel className='text-base font-normal text-dark-500'>Email</FormLabel>
                <FormControl>
                  <Input required placeholder='Email' {...field} className='book-form_input' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"password"}
            render={({ field }) => (
              <FormItem className='flex flex-col gap-1'>
                <FormLabel className='text-base font-normal text-dark-500'>Password</FormLabel>
                <FormControl>
                  <Input type='password' required placeholder='Password' {...field} className='book-form_input' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='book-form_btn text-white'>
            Přihlásit se
          </Button>
        </form>
      </Form>
      <p className='text-left text-sm font-medium mt-3'>
        <Link href='/admin/sign-up' className='text-primary hover:underline'>
          Vytvořit účet
        </Link>
      </p>
    </div>
  )
}

export default Page