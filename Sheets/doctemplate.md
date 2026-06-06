# DocTemplate Sheet — Google Sheets

> Compte Google : **victorlegoffboulon@gmail.com**
> Ce document décrit la structure exacte du Google Sheet principal.
> Créer le Sheet manuellement sur https://sheets.google.com puis y copier les onglets ci-dessous.

---

## Onglet 1 — `Content Calendar`

| Col | Nom               | Type     | Description                                        |
|-----|-------------------|----------|----------------------------------------------------|
| A   | Date              | Date     | Date de publication cible (`YYYY-MM-DD`)           |
| B   | Mois              | Texte    | Mois de publication (auto via formule)             |
| C   | Jour_Semaine      | Texte    | Lundi / Jeudi / Dimanche                           |
| D   | Theme_Principal   | Texte    | Thème macro (Productivité, IA, etc.)               |
| E   | Type_Contenu      | Dropdown | Article / Question / Analyse / Étude de cas / Citation |
| F   | Titre_Post        | Texte    | Accroche du post                                   |
| G   | Contenu_Post      | Texte    | Corps complet du post (max ~3000 car.)             |
| H   | Mots_Cles         | Texte    | Séparés par `;`                                    |
| I   | Hashtags          | Texte    | `#hashtag1 #hashtag2`                              |
| J   | URL_LinkedIn      | URL      | Lien vers le post publié (vide si non publié)      |
| K   | Statut            | Dropdown | Idée / Brouillon / Validé / Publié / Archivé      |
| L   | Note_Interne      | Texte    | Observations libres                                |

### Formule colonne B (Mois auto)
```
=IF(A2="","",TEXT(A2,"MMMM"))
```

### Validation colonne E (Type_Contenu)
Liste : `Article,Question,Analyse,Étude de cas,Citation,Infographie,Carrousel`

### Validation colonne K (Statut)
Liste : `Idée,Brouillon,Validé,Publié,Archivé`

---

## Onglet 2 — `Profiles Watch`

| Col | Nom                        | Type  | Description                              |
|-----|----------------------------|-------|------------------------------------------|
| A   | Nom                        | Texte | Nom de famille                           |
| B   | Prenom                     | Texte | Prénom                                   |
| C   | URL_LinkedIn               | URL   | Profil LinkedIn                          |
| D   | Secteur                    | Texte | Secteur / niche                          |
| E   | Raison_Suivi               | Texte | Pourquoi ce profil                       |
| F   | Frequence_Engagement       | Dropdown | Hebdo / Bi-hebdo / Mensuel           |
| G   | Dernier_Commentaire_Date   | Date  | `YYYY-MM-DD`                             |
| H   | Dernier_Commentaire_URL    | URL   | Lien vers le post commenté               |
| I   | Note                       | Texte | Angle d'engagement, sujets à éviter      |

---

## Onglet 3 — `Members`

| Col | Nom          | Type  | Description                     |
|-----|--------------|-------|---------------------------------|
| A   | Nom          | Texte | Nom                             |
| B   | Prenom       | Texte | Prénom                          |
| C   | Email        | Email | Email professionnel             |
| D   | URL_LinkedIn | URL   | Profil LinkedIn                 |
| E   | Role         | Texte | Fonction                        |
| F   | Actif        | Dropdown | Oui / Non                   |
| G   | Note         | Texte | Libre                           |

---

## Onglet 4 — `Contacts`

| Col | Nom                    | Type  | Description                              |
|-----|------------------------|-------|------------------------------------------|
| A   | Nom                    | Texte | Nom                                      |
| B   | Prenom                 | Texte | Prénom                                   |
| C   | Email                  | Email | Email                                    |
| D   | URL_LinkedIn           | URL   | Profil LinkedIn                          |
| E   | Entreprise             | Texte | Entreprise                               |
| F   | Secteur                | Texte | Secteur                                  |
| G   | Statut_Prospect        | Dropdown | Froid / Tiède / Chaud / Client / Archivé |
| H   | Dernier_Contact_Date   | Date  | `YYYY-MM-DD`                             |
| I   | Note                   | Texte | Libre                                    |

---

## Mise en forme recommandée

- **Ligne 1** : en-tête, fond `#1a1a2e`, texte blanc, bold
- **Colonnes Statut** : mise en forme conditionnelle par couleur
  - Idée → gris clair
  - Brouillon → jaune
  - Validé → bleu
  - Publié → vert
  - Archivé → gris foncé
- **Freezer la ligne 1** : Affichage → Figer → 1 ligne
- **Filtre actif** : activer sur toutes les colonnes
