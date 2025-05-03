"use client";

import { FaMessage } from "react-icons/fa6";
import GetInTouchImg from "@/assets/getInTouch.png";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { TContactForm } from "@/types";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const form = useForm<TContactForm>();

  const onSubmit: SubmitHandler<TContactForm> = (values) => {
    console.log(values);
  };
  return (
    <section id="contact" className="mt-6">
      <SectionTitle heading="Get In Touch"></SectionTitle>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:basis-full">
          <div className="relative w-full flex justify-center items-center">
            <Image src={GetInTouchImg} alt="" className="w-3/4" />
          </div>
        </div>
        <div className="lg:basis-full w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-40 bg-[#4CAF50] dark:bg-[#4CAF50] text-white dark:text-white flex items-center"
              >
                <FaMessage></FaMessage> Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
