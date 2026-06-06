# API Pool — Connexions & Configurations

Ce dossier contient les **configurations d'exemple** (sans secrets) pour chaque connexion API.

## Règle absolue

> Ne jamais committer de tokens, clés API, ou mots de passe.
> Utiliser uniquement les fichiers `.example.env`.
> Les vraies clés vivent dans `.env` (ignoré par `.gitignore`), dans N8N Credentials, ou dans un vault.

## Connexions configurées

| Service        | Dossier          | Documentation officielle                          |
|----------------|------------------|---------------------------------------------------|
| Notion API     | `notion/`        | https://developers.notion.com                     |
| LinkedIn API   | `linkedin/`      | https://developer.linkedin.com                    |
| Google Sheets  | `google-sheets/` | https://developers.google.com/sheets              |
| Claude MCP     | `claude-mcp/`    | https://docs.anthropic.com/en/api                 |
| Gemini         | `gemini/`        | https://ai.google.dev/docs                        |

## Architecture de connexion

```
N8N (orchestrateur)
  ├── → Notion API        (lecture/écriture base de données)
  ├── → Google Sheets API (sync Data Lake)
  ├── → LinkedIn API      (publication, commentaires)
  ├── → Claude API (MCP)  (génération de contenu)
  └── → Gemini API        (analyse d'images, génération)
```
