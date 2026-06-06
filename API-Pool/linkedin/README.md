# LinkedIn API

## Périmètre d'usage

- Publication de posts (profil personnel + page entreprise)
- Récupération du feed des profils suivis (pour détecter les posts à commenter)
- Engagement : commenter, liker

## Setup OAuth 2.0

1. Créer une app sur https://developer.linkedin.com/apps
2. Demander les permissions : `w_member_social`, `r_liteprofile`, `r_emailaddress`
3. Générer le token OAuth via le flow Authorization Code
4. Stocker dans `.env` (créer depuis `.example.env`)

## Limitation importante

L'API LinkedIn officielle est très restrictive sur l'automatisation du commenting.
**Alternative recommandée** : utiliser le workflow N8N avec les cookies de session (approche non-officielle, à utiliser avec précaution).

## Scopes nécessaires

| Scope              | Usage                          |
|--------------------|--------------------------------|
| `w_member_social`  | Publier des posts              |
| `r_liteprofile`    | Lire les infos de profil       |
| `r_organization_social` | Accès à la page entreprise |
