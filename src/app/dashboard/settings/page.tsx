import SettingsNotifications from "@/components/dashboard/settings-notifications"
import SettingsProfile from "@/components/dashboard/settings-profile"
import SettingsSecurity from "@/components/dashboard/settings-security"

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Paramètres
        </h1>

        <p className="mt-1 text-gray-500">
          Gérez votre profil, sécurité et préférences.
        </p>
      </div>

      {/* SETTINGS CONTENT */}
      <div className="grid gap-6">

        <SettingsProfile />

        <SettingsSecurity />

        <SettingsNotifications />

      </div>

    </div>
  )
}