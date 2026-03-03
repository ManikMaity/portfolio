"use client";

import { useForm as useFormspree } from "@formspree/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const [serverState, sendToFormspree] = useFormspree("xreawjaw");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await sendToFormspree(values);
  }

  if (serverState.succeeded) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center space-y-4 py-12"
        >
          <div className="rounded-full bg-green-100 p-5 dark:bg-green-900">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-200" />
          </div>
          <h3 className="text-2xl font-semibold">Message Sent!</h3>
          <p className="max-w-md text-center text-muted-foreground">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>
          {/* Note: Formspree state doesn't reset easily, so we usually 
              just redirect or show a success message. */}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject Field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Project Inquiry" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I'd like to discuss..."
                    className="min-h-32 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={serverState.submitting} className="w-full">
            {serverState.submitting ? (
              <div className="flex items-center">
                <span className="mr-2">Sending</span>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              </div>
            ) : (
              <div className="flex items-center">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </div>
            )}
          </Button>

          {serverState.errors && (
            <p className="text-sm font-medium text-destructive">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </Form>
    </motion.div>
  );
}
