# Google Sheets API

## Compte

Toute la suite Google est rattachée à : **victorlegoffboulon@gmail.com**

## Sheets actifs

| Sheet                   | Rôle                                         | ID (à compléter)  |
|-------------------------|----------------------------------------------|-------------------|
| DocTemplate Master      | Template de saisie données agent             | À renseigner      |
| Content Calendar        | Calendrier de contenu (sync Notion)          | À renseigner      |
| Profiles Watch          | Profils LinkedIn à commenter                 | À renseigner      |

## Setup Service Account (pour N8N)

1. Aller sur https://console.cloud.google.com
2. Créer un projet `employee-advocacy`
3. Activer **Google Sheets API** et **Google Drive API**
4. Créer un **Service Account**, télécharger la clé JSON
5. **Partager chaque Sheet** avec l'email du service account (en tant qu'éditeur)
6. Dans N8N, créer une credential **"Google Sheets OAuth2 API"**

## Structure du DocTemplate Sheet

Voir `Sheets/doctemplate.md` pour la description complète des colonnes.
