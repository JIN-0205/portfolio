"use client";

import { z } from "zod";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  ArrowUp,
  Check,
  Github,
  Linkedin,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  email: z
    .string({
      message: "Please enter a valid email address",
    })
    .email(),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
    .max(700, {
      message: "Message must be at most 700 characters long",
    }),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const scrollToTop = () => {
    const topSection = document.getElementById("top");
    if (topSection) {
      topSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 snap-start bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let&apos;s Connect
              </h3>

              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/jin-nakano-087b44308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group cursor-pointer hover:bg-slate-800/30 rounded-lg p-2 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">
                      linkedin.com/in/jin-nakano-087b44308/
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/JIN-0205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group cursor-pointer hover:bg-slate-800/30 rounded-lg p-2 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white font-medium">
                      github.com/JIN-0205
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Vancouver, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">
                Response Time
              </h4>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent
                matters, please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <Card className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-white">
                  Send Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                              />
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
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="you@example.com"
                                {...field}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              {...field}
                              className="min-h-32 bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/30 text-green-300 rounded-lg">
                        <Check className="w-5 h-5" />
                        <span>
                          Message sent successfully! I&apos;ll get back to you
                          soon.
                        </span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg">
                        <AlertCircle className="w-5 h-5" />
                        <span>
                          Failed to send message. Please try again or contact me
                          directly.
                        </span>
                      </div>
                    )}
                  </form>
                </Form>
              </CardContent>

              <BorderBeam duration={12} size={200} />
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default ContactSection;
