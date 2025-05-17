# 🌍 GeoIP Tracker

Projeto desenvolvido como um desafio pessoal O objetivo é criar uma aplicação capaz de localizar um endereço IP ou domínio e exibir sua localização em um mapa, além de mostrar informações como ISP, fuso horário e cidade.

---

## 🚀 Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Leaflet.js](https://leafletjs.com/) — biblioteca de mapas
- [React Leaflet](https://react-leaflet.js.org/) — integração do Leaflet com React
- [Geo.ipify API](https://geo.ipify.org/) — para busca de dados de IP
- CSS tradicional
- **OpenStreetMap** — fonte dos mapas na visualização do Leaflet

---

## 🛠️ Como Executar

# Clone o repositório
git clone https://github.com/seu-usuario/ip-address-tracker.git

# Acesse a pasta
cd ip-address-tracker

# Instale as dependências
npm install

# Inicie o projeto
npm run dev

---
## 🔑 Configuração de API
Crie uma conta gratuita em geo.ipify.org e obtenha sua API key.

Depois, no arquivo App.jsx, substitua:

 const apiKey = "SUA_CHAVE_API";
 
---

## 🧩 Desafios ao Trabalhar com Leaflet pela Primeira Vez
Aprender a integrar mapas em uma aplicação React foi um baita aprendizado. No começo pareceu complicado, mas aos poucos fui entendendo como tudo se conecta. Trabalhar com uma lib de mapas como o Leaflet me tirou da zona de confortoe me fez encarar problemas de um jeito bem diferente do que eu estava acostumado.

Durante esse processo, precisei da ajuda de um desenvolvedor mais experiente para resolver dois desafios importantes:

Fazer o MapContainer atualizar a posição automaticamente ao buscar um novo IP. O mapa não se movia mesmo com as coordenadas atualizadas. 

Evitar o crash da aplicação ao renderizar o mapa antes da resposta da API. As coordenadas vinham como undefined e causavam erro. Com orientação, implementei uma verificação condicional (ipData && ipData.location && ...) antes de acessar os dados, garantindo que o mapa só fosse renderizado com as informações carregadas corretamente.

Esses aprendizados fizeram toda a diferença para o funcionamento da aplicação.


---
## ❗ Dificuldades enfrentadas:

MapContainer não atualiza posição automaticamente:

O mapa não se movia mesmo após atualizar as coordenadas.

Solução: Criar um componente auxiliar usando useMap e map.setView() para mover manualmente a câmera (MapUpdater).

Erro de ícone ausente no mapa:

Por padrão, o Leaflet tenta carregar ícones de marcador que não funcionam bem com bundlers modernos (como Vite).

Solução: Substituir manualmente os caminhos dos ícones com L.Icon.Default.mergeOptions(...).

Lat/Lng indefinido causando crash:

Ao tentar renderizar o mapa antes da resposta da API, as coordenadas vinham undefined.

Solução: Verificação condicional (ipData && ipData.location && ...) antes de acessar os dados.

---

## Integração entre React e Leaflet:

Usar o React junto com o Leaflet me fez quebrar um pouco a cabeça no começo. Tive que entender como encaixar coisas como o useMap dentro dos componentes e lidar com o jeito diferente que o Leaflet funciona.

## ✅ Funcionalidades

Buscar IP ou domínio e mostrar a localização no mapa

Exibir endereço IP, localização, fuso horário e provedor (ISP)

Mapa interativo com zoom e movimentação

Atualização automática do mapa ao pesquisar novo IP

