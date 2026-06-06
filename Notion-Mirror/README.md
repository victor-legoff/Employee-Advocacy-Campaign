# Notion Mirror — Schémas des Tables

Ce dossier est la **source de vérité de la structure Notion**.
Chaque sous-dossier correspond à une table Notion. Les schémas ici doivent rester synchronisés avec la réalité Notion.

## Tables

| Table Notion               | Dossier local                    |
|----------------------------|----------------------------------|
| Agenda de Contenu          | `content-calendar/`              |
| Données des Membres        | `members/`                       |
| Liste des Contacts         | `contacts/`                      |
| Contenus Pré-Approuvés     | `pre-approved-content/`          |

## Convention de mise à jour

Quand tu modifies la structure d'une table Notion :
1. Mettre à jour le `README.md` du dossier correspondant ici
2. Mettre à jour le schéma CSV dans `Data-Lake/`
3. Committer avec : `mirror: update {table-name} schema`
