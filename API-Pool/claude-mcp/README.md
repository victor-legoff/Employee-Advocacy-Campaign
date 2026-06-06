# Claude API — Génération de Contenu

## Usage dans le workflow

Claude est utilisé pour :
1. Générer les drafts de posts LinkedIn à partir du thème + mots-clés
2. Adapter le ton à ton style d'écriture (après fine-tuning du prompt)
3. Suggérer des commentaires sur les posts des profils suivis

## Prompt système (base)

```
Tu es un assistant spécialisé dans la création de contenu LinkedIn pour un profil GTM / Business Development.
Ton rôle est de générer des posts authentiques, engageants et à forte valeur ajoutée.

Contraintes :
- Ton : professionnel mais accessible, première personne
- Longueur : 150 à 300 mots
- Structure : accroche forte (1 ligne) + développement + call-to-action ou question finale
- Pas d'emojis excessifs (max 2-3 pertinents)
- Toujours inclure 3 à 5 hashtags pertinents en fin de post
```

## Intégration N8N

Dans N8N, utiliser le node **"Anthropic Chat Model"** ou **"HTTP Request"** vers `https://api.anthropic.com/v1/messages`.
Créer une credential **"Header Auth"** avec `x-api-key: {ANTHROPIC_API_KEY}`.
