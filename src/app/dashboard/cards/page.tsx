import BankCard from "@/components/dashboard/bank-card"
import CardActions from "@/components/dashboard/card-actions"

export default function CardsPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Mes cartes
        </h1>

        <p className="mt-1 text-gray-500">
          Gérez vos cartes bancaires virtuelles et physiques.
        </p>
      </div>

      {/* CARD */}
      <BankCard
        holderName="GHISLAIN GHUS"
        cardNumber="4587 4587 4587 2048"
        expiryDate="12/29"
        balance={125000}
      />

      {/* ACTIONS */}
      <CardActions />

    </div>
  )
}