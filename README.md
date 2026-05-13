🍔 Menu-QrCode | Menu Digital & Gestão de Pedidos

Uma plataforma de e-commerce gastronômico de alta performance, desenvolvida para oferecer uma experiência de compra fluida e intuitiva, com foco em arquitetura de dados escalável e gestão de estado complexo.

🚀 Demonstrações



✨ Funcionalidades Principais

Menu Inteligente: Listagem dinâmica de produtos com tratamento de preços promocionais.
Customização Avançada: Seleção de ingredientes extras e preferências (ex: ponto da carne).
Gestão de Carrinho: Fluxo completo de pedidos integrado via Context API.
UX Otimizada: Loaders localizados e transições suaves para evitar o Cumulative Layout Shift (CLS).

🛠️ Diferenciais Técnicos
Neste projeto, apliquei padrões de mercado para garantir que a aplicação seja fácil de manter e performática:

Arquitetura de Dados com Interceptadores:
Utilizei interceptadores globais no Axios para gerenciar o ciclo de vida das requisições. Isso automatiza a exibição de loaders e o tratamento centralizado de erros, eliminando a necessidade de repetir estados de carregamento em cada componente.

Estado Global e Desacoplamento:
A lógica de negócio foi isolada em Context API, mantendo os componentes de interface focados apenas na renderização.

Segurança e Consistência:
Implementação rigorosa de Optional Chaining e validações de dados para evitar quebras de renderização por valores nulos vindos da API.

UI/UX Moderna:
Uso de ícones vetoriais (Lucide React) e animações via CSS/Tailwind para um feedback visual imediato e leve.

📦 Tecnologias Utilizadas

Front-end: React.js e Tailwind CSS
Back-end: Node.js e Express.
Banco de Dados & ORM: MongoDB, Prisma ORM.
Consumo de API: Axios

Este projeto foi desenvolvido com foco em boas práticas de engenharia de software, separação de responsabilidades e escalabilidade.