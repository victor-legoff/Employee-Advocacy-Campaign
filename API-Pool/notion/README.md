# Notion API

## Setup

1. Créer une intégration sur https://www.notion.so/my-integrations
2. Copier le token dans `.env` (créer depuis `.example.env`)
3. Partager chaque base de données avec l'intégration (bouton "Connect" en haut à droite de chaque table Notion)
4. Récupérer les IDs de chaque DB dans l'URL : `notion.so/{workspace}/{DATABASE_ID}?...`

## N8N Credential

Dans N8N, créer une credential de type **"Notion API"** avec le token.
Le workflow "Listing Prospect" (ID: FbI0uUyhsnCmXIZ6) utilise déjà cette connexion.

## Bases de données à connecter

| Variable                      | Table Notion               |
|-------------------------------|----------------------------|
| `NOTION_DB_CONTENT_CALENDAR`  | Agenda de Contenu          |
| `NOTION_DB_MEMBERS`           | Données des Membres        |
| `NOTION_DB_CONTACTS`          | Liste des Contacts         |
| `NOTION_DB_PRE_APPROVED`      | Contenus Pré-Approuvés     |
