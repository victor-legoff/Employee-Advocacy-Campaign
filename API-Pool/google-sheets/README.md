# Google Sheets API — Setup complet

## Comptes

| Rôle              | Email                          |
|-------------------|--------------------------------|
| Propriétaire      | victorlgb.pro@gmail.com        |
| Éditeur (partage) | victorlegoffboulon@gmail.com   |

## Sheet Master créé

| Champ    | Valeur                                                                                       |
|----------|----------------------------------------------------------------------------------------------|
| Titre    | victor-legoff/Employee-Advocacy — Master Sheet                                               |
| ID       | `1JfPTLa3bPe5YRUFaUVH7G0gxqjeuDiI3NBgqYw7FOeA`                                             |
| URL      | https://docs.google.com/spreadsheets/d/1JfPTLa3bPe5YRUFaUVH7G0gxqjeuDiI3NBgqYw7FOeA/edit   |
| Onglets  | Content Calendar / Profiles Watch / Members / Contacts                                       |

---

## Étape 1 — Structurer le Sheet (Apps Script)

1. Ouvrir le Sheet ci-dessus
2. **Extensions → Apps Script**
3. Coller le contenu de `setup_master_sheet.gs` (remplacer tout le code existant)
4. Cliquer **Exécuter** sur la fonction `setupAll`
5. Accepter les autorisations Google

Résultat : 4 onglets créés avec headers, validation de données, formatage conditionnel, filtres.

---

## Étape 2 — Partager avec victorlegoffboulon@gmail.com

1. Dans le Sheet, cliquer **Partager** (coin supérieur droit)
2. Ajouter `victorlegoffboulon@gmail.com` en **Éditeur**

---

## Étape 3 — Connexion N8N (Service Account)

### Créer le Service Account Google Cloud

```bash
# 1. Créer un projet Google Cloud
# Aller sur : https://console.cloud.google.com/projectcreate
# Nom du projet : employee-advocacy

# 2. Activer les APIs nécessaires
# Sheets API : https://console.cloud.google.com/apis/library/sheets.googleapis.com
# Drive API  : https://console.cloud.google.com/apis/library/drive.googleapis.com

# 3. Créer un Service Account
# IAM & Admin → Service Accounts → Créer
# Nom : n8n-employee-advocacy
# Télécharger la clé JSON

# 4. Partager le Sheet avec l'email du service account
# (visible dans le fichier JSON : "client_email")
```

### Dans N8N

1. **Credentials → Add Credential → Google Sheets OAuth2 API**
2. Coller le contenu du fichier JSON de service account
3. Utiliser l'ID du sheet `1JfPTLa3bPe5YRUFaUVH7G0gxqjeuDiI3NBgqYw7FOeA` dans les nodes

---

## Étape 4 — Connexion directe OAuth (si tu travailles depuis ton propre compte)

Dans N8N, utiliser **"Google Sheets Trigger"** ou **"Google Sheets"** node avec OAuth2 personnel.
Autoriser depuis le compte `victorlgb.pro@gmail.com`.
