import { LogoGoogle } from '@/components/logo-google.tsx';
import { LogoSteam } from '@/components/logo-steam';
import { LogoDiscord } from '@/components/logo-discord';
import { LogoTwitch } from '@/components/logo-twitch';
import { LogoTwitter } from '@/components/logo-twitter';
import { LogoEpic } from '@/components/logo-epic';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { Separator } from '@/components/ui/separator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { z } from 'zod';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login with your Verified Account</CardDescription>
          <Button className="mt-2 w-full gap-3" variant="outline">
            <LogoGoogle />
            Continue with Google
          </Button>
          <Button className="mt-2 w-full gap-3" variant="outline">
              <LogoTwitch />
              Continue with Twitch
          </Button>
          <Button className="mt-2 w-full gap-3" variant="outline">
              <LogoTwitter />
              Continue with Twitter
          </Button>
          <Button className="mt-2 w-full gap-3" variant="outline">
              <LogoSteam />
              Continue with Steam
          </Button>
          <Button className="mt-2 w-full gap-3" variant="outline">
              <LogoDiscord />
              Continue with Discord
          </Button>
          <Button className="mt-2 w-full gap-3" variant="outline">
              <LogoEpic />
              Continue with Epic Games
          </Button>
        </CardHeader>
        <CardContent>
          <div className="my-2 flex w-full items-center justify-center overflow-hidden">
            <Separator />
            <span className="px-2 text-sm">OR</span>
            <Separator />
          </div>

          <InputOTP maxLength={6}>
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

          <Form {...form}>
            <form
              className="w-full space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="w-full"
                        {...field}
                      />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Password"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4 w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>

        <div className="mt-5 space-y-5">
          <Link
            to="/auth/forgot-password"
            className="text-muted-foreground block text-center text-sm underline"
          >
            Forgot your password?
          </Link>
          <p className="text-center text-sm">
            Don&apos;t have an account?
            <Link
              to="/auth/signup"
              className="text-muted-foreground ml-1 underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
