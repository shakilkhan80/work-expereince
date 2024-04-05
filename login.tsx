"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { TSignup } from "@/types/authentication";
import { ZSignup } from "@/validators/authentications";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "../ui/input";

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<TSignup>({
    resolver: zodResolver(ZSignup),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-2 rounded-lg border bg-card px-3 py-3 text-card-foreground shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(async (values) => {
            const res = await signIn("credentials", values);
            if (res?.error) {
              toast.error(JSON.stringify(res.error));
            } else {
              router.push("/");
            }
          })();
        }}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" {...field} placeholder="Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" {...field} placeholder="Password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <Button
            className="w-full bg-primary/90 transition-all duration-500 hover:scale-95 hover:bg-primary"
            type="submit"
          >
            Log In
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
