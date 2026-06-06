# Notion API — Setup complet

## Étape 1 — Créer l'intégration Notion

1. Aller sur https://www.notion.so/my-integrations
2. Cliquer **+ New integration**
3. Nom : `Employee Advocacy N8N`
4. Associer à ton workspace
5. Copier le **Internal Integration Token** → c'est ton `NOTION_API_TOKEN`

---

## Étape 2 — Connecter chaque base de données

Pour chaque table Notion (Content Calendar, Members, Contacts, Pre-Approved Content) :

1. Ouvrir la table dans Notion
2. Cliquer **···** (menu en haut à droite) → **Connections** → ajouter `Employee Advocacy N8N`
3. Récupérer l'ID de la DB dans l'URL :

```
https://notion.so/{workspace}/{DATABASE_ID}?v=...
                              ↑
                     32 caractères hex (sans tirets)
```

---

## Étape 3 — Renseigner les IDs dans .env

Créer un fichier `.env` (copier `.example.env`) et renseigner :

```env
NOTION_API_TOKEN=secret_xxxxxxxx...

NOTION_DB_CONTENT_CALENDAR=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_MEMBERS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_CONTACTS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_PRE_APPROVED=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## Étape 4 — Credential N8N

1. Dans N8N → **Credentials → Add → Notion API**
2. Coller le `NOTION_API_TOKEN`
3. Le workflow "Listing Prospect" (ID: `FbI0uUyhsnCmXIZ6`) utilise déjà cette credential

---

## Étape 5 — Tester la connexion

Dans N8N, créer un node **"Notion"** → **"Get Database"** avec l'ID de ton Content Calendar.
Si tu vois les propriétés de ta table → connexion OK.

---

## Structure des propriétés Notion attendues

Les noms de propriétés doivent correspondre exactement à ce qui est défini dans `Notion-Mirror/`.
Voir chaque `README.md` dans `Notion-Mirror/{table}/` pour les noms exacts.

> Si tu modifies le nom d'une propriété dans Notion, mettre à jour le workflow N8N ET le Notion-Mirror correspondant.

---

## Test rapide API (curl)

```bash
curl -X GET "https://api.notion.com/v1/databases/{NOTION_DB_CONTENT_CALENDAR}" \
  -H "Authorization: Bearer {NOTION_API_TOKEN}" \
  -H "Notion-Version: 2022-06-28" \
  | python3 -m json.tool | head -50
```
