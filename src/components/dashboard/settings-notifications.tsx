"use client"

import { Bell } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Switch } from "@/components/ui/switch"

export default function SettingsNotifications() {
  return (
    <Card className="rounded-3xl border border-gray-200 shadow-sm">
      <CardContent className="p-6">

        {/* HEADER */}
        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-2xl bg-yellow-100 p-3">
            <Bell className="h-5 w-5 text-yellow-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Notifications
            </h2>

            <p className="text-sm text-gray-500">
              Configurez vos alertes et notifications.
            </p>
          </div>

        </div>

        {/* SWITCHES */}
        <div className="space-y-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="font-medium text-gray-900">
                Notifications email
              </p>

              <p className="text-sm text-gray-500">
                Recevoir des alertes par email.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">

            <div>
              <p className="font-medium text-gray-900">
                Alertes de transactions
              </p>

              <p className="text-sm text-gray-500">
                Être notifié à chaque transaction.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

        </div>

      </CardContent>
    </Card>
  )
}