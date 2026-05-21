import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-28 md:px-16">
      <div className="mx-auto max-w-3xl text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
          Reprenez le contrôle de votre argent
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          Ouvrez un compte gratuitement et commencez à envoyer et recevoir de
          l’argent en toute simplicité.
        </p>

        <Link
          href="/auth/register"
          className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-white font-medium hover:bg-green-700 transition"
        >
          Ouvrir un compte gratuit
        </Link>
      </div>
    </section>
  );
}
