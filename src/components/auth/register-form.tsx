"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  ArrowLeft,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react"

import { toast } from "sonner"

import { registerUser } from "@/lib/auth"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const registerSchema = z
  .object({
    email: z.string().email("Email invalide"),
    password: z
      .string()
      .min(6, "Minimum 6 caractères"),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message:
        "Les mots de passe ne correspondent pas",
      path: ["confirmPassword"],
    }
  )

type RegisterFormData = z.infer<
  typeof registerSchema
>

export default function RegisterForm() {
  const router = useRouter()

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  })

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = form

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      await registerUser(
        data.email,
        data.password
      )

      toast.success(
        "Compte créé avec succès"
      )

      router.push("/dashboard")
    } catch (error) {
      toast.error(
        "Erreur lors de la création du compte"
      )
    }
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
              />
            </Link>
          </div>

          {/* HEADER */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <ShieldCheck className="h-7 w-7 text-green-600" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Créer un compte
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Rejoignez YetuBank et gérez vos
              finances facilement.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* EMAIL */}
            <div className="space-y-2">
              <Label>Email</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                <Input
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

            {/* PASSWORD */}
            <div className="space-y-2">
              <Label>Mot de passe</Label>

              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-12 rounded-xl pl-10"
                  {...register("password")}
                />
              </div>

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="space-y-2">
              <Label>
                Confirmer le mot de passe
              </Label>

              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-12 rounded-xl pl-10"
                  {...register(
                    "confirmPassword"
                  )}
                />
              </div>

              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {
                    errors.confirmPassword
                      .message
                  }
                </p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full rounded-xl bg-black text-white transition cursor-pointer "
            >
              {isSubmitting
                ? "Création..."
                : "Créer un compte"}
            </Button>

          </form>

          {/* FOOTER */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Déjà un compte ?{" "}
            <Link
              href="/auth/login"
              className="text-green-600 hover:underline"
            >
              Se connecter
            </Link>
          </p>

        </CardContent>
      </Card>
    </main>
  )
}