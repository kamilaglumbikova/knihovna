"use client";

import { signUpSchema } from '@/lib/validations'
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
import { signUp } from '@/lib/admin/actions/user';
import { toast } from '@/hooks/use-toast';
import { useRouter } from "next/navigation";
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => { 
    const result = await signUp(values);

    if(result.success) {
        toast({
            title: 'Success',
            description: 'Uživatel vytvořen'
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
      <h2 className='font-semibold text-xl mb-3'>Registrovat se</h2>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name={"fullName"}
            render={({ field }) => (
              <FormItem className='flex flex-col gap-1'>
                <FormLabel className='text-base font-normal text-dark-500'>Jméno a Přijmení</FormLabel>
                <FormControl>
                  <Input required placeholder='Jméno a Přijmení' {...field} className='book-form_input' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Registrovat
          </Button>
        </form>
      </Form>
      <p className='text-left text-sm font-medium mt-3'>
        <Link href='/admin/sign-in' className='text-primary hover:underline'>
          Už mám účet
        </Link>
      </p>
    </div>
  )
}

export default Page