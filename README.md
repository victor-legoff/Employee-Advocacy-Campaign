# Employee Advocacy Campaign

> **Convention de nommage :** `victor-legoff/Employee-Advocacy-Campaign`
> **Principe :** GitHub = miroir de la structure Notion. Le fond (données) reste sous ta main. La forme (structure, schémas, code, configs) est ici.

---

## Structure du repo

```
Employee-Advocacy-Campaign/
├── Workflow/                  ← Workflows N8N exportés (JSON)
├── Data-Lake/                 ← Schémas CSV vides + données exportées Notion
│   ├── content-calendar/
│   ├── profiles-watch/        ← Profils LinkedIn à commenter
│   ├── members/               ← Membres de l'équipe
│   ├── contacts/              ← Contacts prospects
│   └── pre-approved-content/
├── API-Pool/                  ← Configs de connexion (exemples, sans secrets)
│   ├── notion/
│   ├── linkedin/
│   ├── google-sheets/
│   ├── claude-mcp/
│   └── gemini/
├── References/                ← Page LinkedIn, chaîne YouTube, profils cible
│   ├── linkedin/
│   └── youtube/
├── Notion-Mirror/             ← Schéma exact des tables Notion (README par table)
└── Sheets/                    ← Doc du Google Sheet rattaché au compte
```

---

## Connexions actives

| Service       | Statut  | Fichier config              |
|---------------|---------|-----------------------------|
| Notion        | ✅ Live  | `API-Pool/notion/`          |
| N8N           | ✅ Live  | `Workflow/`                 |
| Google Sheets | 🔧 Setup | `API-Pool/google-sheets/`   |
| LinkedIn API  | 🔧 Setup | `API-Pool/linkedin/`        |
| Claude MCP    | 🔧 Setup | `API-Pool/claude-mcp/`      |
| Gemini        | 🔧 Setup | `API-Pool/gemini/`          |

---

## Règles du repo

- **Jamais de secrets en clair** — utilise uniquement les fichiers `.example.env`
- **Données brutes** → `Data-Lake/` (CSV exportés depuis Notion ou Google Sheets)
- **Workflows N8N** → `Workflow/` (export JSON depuis l'interface N8N)
- **Schémas Notion** → `Notion-Mirror/` (README par table = source de vérité de la structure)
