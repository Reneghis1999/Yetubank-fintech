"use client"

import {
  Lock,
  ShieldCheck,
} from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function SettingsSecurity() {
  return (
    <Card className="rounded-3xl border border-gray-200 shadow-sm">
      <CardContent className="p-6">

        {/* HEADER */}
        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-2xl bg-blue-100 p-3">
            <ShieldCheck className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Sécurité
            </h2>

            <p className="text-sm text-gray-500">
              Gérez la sécurité de votre compte.
            </p>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="space-y-4">

          <div className="flex items-center justify-between rounded-2xl border border-gray-100 p-4">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-gray-100 p-2">
                <Lock className="h-4 w-4 text-gray-700" />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Modifier le mot de passe
                </p>

                <p className="text-sm text-gray-500">
                  Mettez à jour votre mot de passe.
                </p>
              </div>

            </div>

            <Button
              variant="outline"
              className="rounded-xl"
            >
              Modifier
            </Button>

          </div>

        </div>

      </CardContent>
    </Card>
  )
}