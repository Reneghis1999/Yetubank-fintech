// components/auth/forgot-password-form.tsx

"use client"

import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  ArrowLeft,
  Mail,
  ShieldAlert,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const forgotPasswordSchema = z.object({
  email: z.string().email("Email invalide"),
})

type ForgotPasswordFormData = z.infer<
  typeof forgotPasswordSchema
>

export default function ForgotPasswordForm() {
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form

  const onSubmit = async (
    data: ForgotPasswordFormData
  ) => {
    console.log("FORGOT PASSWORD:", data)

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    )
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#f7f8fa] px-6 py-10">
      
      {/* BACK HOME */}
      <Link
        href="/"
        className="fixed top-8 left-8 flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à l’accueil
      </Link>

      {/* CARD */}
      <Card className="w-full max-w-md rounded-3xl border border-gray-200 shadow-xl">
        <CardContent className="p-8">

          {/* LOGO */}
          <div className="mb-8 flex justify-center">
            <Link href="/">
              <Image
                src="/images/yetubank-logo-light.svg"
                alt="YetuBank"
                width={160}
                height={50}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* HEADER */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
              <ShieldAlert className="h-7 w-7 text-orange-500" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Mot de passe oublié
            </h1>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Entrez votre adresse email afin de recevoir
              un lien de réinitialisation.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* EMAIL */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Adresse email
              </Label>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  className="h-12 rounded-xl pl-10"
                  {...register("email")}
                />
              </div>

              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer h-12 w-full cursor-pointer rounded-xl bg-black text-white transition-all duration-300 hover:bg-green-600"
            >
              {isSubmitting
                ? "Envoi..."
                : "Envoyer le lien"}
            </Button>
          </form>

          {/* FOOTER */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Vous vous souvenez de votre mot de passe ?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-green-600 hover:underline"
            >
              Se connecter
            </Link>
          </p>

        </CardContent>
      </Card>
    </main>
  )
}