 💳 YetuBank Fintech

YetuBank est une **application web de banque digitale (frontend-first)** conçue pour simuler une plateforme bancaire moderne avec authentification, dashboard utilisateur et gestion financière.

Le projet est actuellement en phase de développement frontend avec une logique d’authentification mockée et une architecture prête pour une future API backend.

---

##  Stack technique

- **Next.js 14+ (App Router)**
- **TypeScript**
- **React Hook Form**
- **Zod (validation)**
- **Tailwind CSS**
- **shadcn/ui**
- **Sonner (notifications)**

---

##  Fonctionnalités actuelles

###  Authentification (Mock)
- Inscription utilisateur (register)
- Connexion utilisateur (login)
- Mot de passe oublié (UI)
- Stockage local via `localStorage`
- Simulation d’API

###  Navigation
- Redirection automatique après login/register
- Protection basique des routes (frontend guard)

###  UI/UX
- Design moderne type fintech
- Composants shadcn/ui
- Interface responsive
- Feedback utilisateur avec notifications

---

##  Architecture du projet


/app
/auth
/login
/register
/forgot-password
/dashboard (à venir)

/components
/auth
login-form.tsx
register-form.tsx

/lib
auth.ts (mock authentication logic)


---

##  Système d’auth actuel

Le système d’authentification est simulé côté frontend :

- Création d’utilisateur stocké dans `localStorage`
- Connexion basée sur données mockées
- Aucun backend connecté pour le moment

 Ceci est un système de démonstration uniquement.

---

##  Prochaines fonctionnalités

###  Dashboard bancaire
- Solde utilisateur
- Cartes statistiques (revenus / dépenses)
- Transactions mockées
- Graphiques financiers
- Sidebar de navigation

###  Sécurité (future)
- Middleware de protection de routes
- Auth backend (Laravel / API)
- JWT ou session cookies

###  KYC System (future)
- Vérification identité utilisateur
- Statut utilisateur (unverified / verified)

---

##  Installation

```bash
git clone https://github.com/ton-repo/yetubank.git
cd yetubank
npm install
npm run dev
▶️ Lancer le projet
npm run dev

Puis ouvrir :

http://localhost:3000
 Objectif du projet

YetuBank a pour objectif de simuler une néobanque moderne afin de :

Développer des compétences avancées en frontend
Construire une UI/UX fintech réaliste
Préparer une architecture scalable full-stack
Servir de portfolio professionnel
 Status du projet

 En développement (Phase 1 : Auth + UI)
🔜 Phase 2 : Dashboard bancaire
🔜 Phase 3 : Backend API + vraie auth


