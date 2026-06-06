# Data Lake — Calendrier de Contenu

Miroir de la table Notion **"Agenda de Contenu"**.

## Colonnes

| Colonne          | Type    | Description                                        | Valeurs possibles                              |
|------------------|---------|----------------------------------------------------|------------------------------------------------|
| `Date`           | Date    | Date de publication cible                          | `YYYY-MM-DD`                                   |
| `Mois`           | Texte   | Mois de publication                                | Janvier … Décembre                             |
| `Jour_Semaine`   | Texte   | Jour de la semaine                                 | Lundi / Jeudi / Dimanche                       |
| `Theme_Principal`| Texte   | Thème macro du post                                | Productivité, Développement Personnel, IA…     |
| `Type_Contenu`   | Texte   | Format du contenu                                  | Article, Question, Analyse, Étude de cas, Citation |
| `Titre_Post`     | Texte   | Titre / accroche du post                           | Libre                                          |
| `Contenu_Post`   | Texte   | Corps du post LinkedIn                             | Libre (max ~3000 car.)                         |
| `Mots_Cles`      | Texte   | Mots-clés SEO / thématiques                        | Séparés par `;`                                |
| `Hashtags`       | Texte   | Hashtags LinkedIn                                  | `#hashtag1 #hashtag2`                          |
| `URL_LinkedIn`   | URL     | Lien vers le post publié                           | Vide si pas encore publié                      |
| `Statut`         | Texte   | État du post                                       | Idée / Brouillon / Validé / Publié / Archivé  |
| `Note_Interne`   | Texte   | Observations, feedback performance                 | Libre                                          |

## Cycle de vie d'un post

```
Idée → Brouillon → Validé → Publié → Archivé
```

## Rythme de publication cible

- **Lundi** : Productivité / Stratégie
- **Jeudi** : Développement personnel / Question engagement
- **Dimanche** : Tendances secteur / Analyse

## Mise à jour

Exporter depuis Notion → remplacer `schema.csv` → committer avec le message `data: update content-calendar YYYY-MM-DD`.
