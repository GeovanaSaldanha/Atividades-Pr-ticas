# Atividades Práticas

Exercícios de React sobre `useEffect` e comunicação entre componentes.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173) e o DevTools (F12, aba Console) para ver os logs.

## Exercícios

| # | Pasta | O que demonstra |
|---|-------|-----------------|
| 1 | `src/exercicio1` | `useEffect(..., [])` roda uma única vez, mesmo com re-renderizações |
| 2 | `src/exercicio2` | `useEffect(..., [valor])` loga na montagem e a cada mudança da prop |
| 3 | `src/exercicio3` | `eventBus.js` com `subscribe` e `emit` ligando dois componentes sem relação |

## Observação sobre o StrictMode

O `<StrictMode>` do React executa os efeitos duas vezes em desenvolvimento, o que atrapalharia a verificação do exercício 1. Por isso ele não é usado em `main.jsx`.
