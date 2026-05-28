"use client"

import { User } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsProfile() {
  return (
    <Card className="rounded-3xl border border-gray-200 shadow-sm">
      <CardContent className="p-6">

        {/* HEADER */}
        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-2xl bg-green-100 p-3">
            <User className="h-5 w-5 text-green-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Informations personnelles
            </h2>

            <p className="text-sm text-gray-500">
              Gérez les informations de votre compte.
            </p>
          </div>

        </div>

        {/* FORM */}
        <div className="grid gap-5 md:grid-cols-2">

          <div className="space-y-2">
            <Label>Nom complet</Label>

            <Input
              placeholder="Ghislain NAYO"
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>

            <Input
              placeholder="viceprojects19@gmail.com"
              className="h-11 rounded-xl"
            />
          </div>

        </div>

      </CardContent>
    </Card>
  )
}