# Gemini API

## Usage dans le workflow

Gemini est utilisé pour :
1. Analyser des images/visuels pour générer des descriptions de posts
2. Générer des visuels pour accompagner les posts (Gemini Imagen)
3. Analyse de tendances via le web (Gemini avec Google Search grounding)

## Modèles recommandés

| Modèle                | Usage                                    |
|-----------------------|------------------------------------------|
| `gemini-2.0-flash`    | Génération de texte rapide              |
| `gemini-2.0-pro`      | Analyse complexe, raisonnement          |
| `imagen-3`            | Génération d'images                     |

## Intégration N8N

Utiliser le node **"HTTP Request"** vers `https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent`.
Passer la clé en query param : `?key={GEMINI_API_KEY}`.
