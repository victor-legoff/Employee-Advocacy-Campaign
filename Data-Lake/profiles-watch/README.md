# Data Lake — Profils LinkedIn à Commenter

Table des profils LinkedIn sur lesquels tu veux interagir régulièrement (commenter, engager, suivre).

## Colonnes

| Colonne                   | Type    | Description                                          | Valeurs possibles                        |
|---------------------------|---------|------------------------------------------------------|------------------------------------------|
| `Nom`                     | Texte   | Nom de famille                                       | Libre                                    |
| `Prenom`                  | Texte   | Prénom                                               | Libre                                    |
| `URL_LinkedIn`            | URL     | URL du profil LinkedIn                               | `https://linkedin.com/in/...`            |
| `Secteur`                 | Texte   | Secteur d'activité / niche                           | GTM, IA, Hôtellerie, Immobilier…        |
| `Raison_Suivi`            | Texte   | Pourquoi ce profil est pertinent                     | Libre                                    |
| `Frequence_Engagement`    | Texte   | Rythme souhaité d'interaction                        | Hebdo / Bi-hebdo / Mensuel               |
| `Dernier_Commentaire_Date`| Date    | Date du dernier commentaire posté                    | `YYYY-MM-DD`                             |
| `Dernier_Commentaire_URL` | URL     | Lien vers le post commenté                           | Optionnel                                |
| `Note`                    | Texte   | Contexte, angle d'engagement, topics à éviter        | Libre                                    |

## Stratégie d'engagement

1. Commenter en premier sur les posts des profils à forte visibilité (top of feed)
2. Angle : ajouter de la valeur, poser une question, ou prolonger le propos
3. Éviter les commentaires génériques ("Super post !")
4. Tracker `Dernier_Commentaire_Date` pour maintenir la régularité
