# 🌍 GeoFinder

Aplicativo mobile desenvolvido com **React Native + Expo** que permite buscar locais, visualizar no mapa e navegar até eles de forma simples, rápida e intuitiva.

---

## Sobre o projeto

O **GeoFinder** foi criado com o objetivo de praticar conceitos modernos de desenvolvimento mobile, focando em:

* Experiência de usuário (UX)
* Integração com mapas
* Busca de locais em tempo real
* Performance e simplicidade (sem dependências pesadas)

---

## Funcionalidades

* Busca de locais com autocomplete
* Visualização no mapa
* Centralização automática no local selecionado
* Botão de navegação rápida para busca
* Tela "About" com informações do desenvolvedor
* Transições suaves entre telas
* Animação de foco no mapa

---

## Tecnologias utilizadas

* React Native
* Expo
* TypeScript
* React Native Maps
* API de geocoding (OpenStreetMap / Nominatim)
* StyleSheet (UI nativa, sem libs externas pesadas)

---

## 📱 Estrutura do projeto

```
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── src
│   ├── animations
│   │   └── AnimatedScreen.tsx
│   ├── hooks
│   │   └── useLocation.ts
│   ├── navigation
│   │   └── AppNavigator.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── SearchScreen.tsx
│   ├── services
│   │   └── geocoding.ts
│   └── types
│       └── navigation.ts
├── .env.example
├── .gitignore
├── App.tsx
├── README.md
├── app.json
├── babel.config.js
├── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

---

## Decisões técnicas

O projeto foi desenvolvido priorizando **estabilidade e controle**, evitando dependências complexas que poderiam comprometer o build.

* Sem uso de animações pesadas (ex: Reanimated)
* Sem bibliotecas instáveis
* Uso de APIs nativas (`Animated`)
* UI construída manualmente com `StyleSheet`

---

## Como funciona a busca

A busca de locais é feita utilizando a API do **OpenStreetMap (Nominatim)**, convertendo texto em coordenadas geográficas (latitude/longitude).

---

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/geofinder.git
cd geofinder
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o projeto

```bash
npx expo start
```

---

## Preview

> (screenshots do app depois)

---

## Melhorias futuras

* Traçar rotas (GPS)
* Múltiplos marcadores no mapa
* Histórico de buscas
* Melhorias visuais e animações adicionais
* Integração com APIs mais robustas (Google Maps / Mapbox)

---

## Autor

Desenvolvido por **Yago Menezes**

* GitHub: https://github.com/tenmenezes
* Email: [yago.ten.menezes@outlook.com](mailto:yago.ten.menezes@outlook.com)

---

## 📄 Licença

Este projeto está sob a licença MIT.

