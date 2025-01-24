# Componente ProfileCard

Um componente de cartão de perfil lindamente projetado, construído com **Styled Components** no React. Este cartão permite exibir a foto de perfil de um usuário, informações pessoais, especificações do setup do PC e links para redes sociais em um layout atraente e responsivo.

---

## Funcionalidades

- **Design Responsivo**: Adapta-se lindamente a diferentes tamanhos de tela.
- **Estilização Personalizável**: Fácil de modificar com Styled Components.
- **Dados Dinâmicos**: Passe dados do usuário como props para preencher o cartão.
- **Integração de Ícones**: Inclui ícones do `react-icons` para um visual aprimorado.
- **Efeitos Hover**: Animações e transições envolventes para interação do usuário.

---

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/ProfileCard.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd ProfileCard
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npm start
   ```

---

## Uso

### Importe o Componente

```jsx
import ProfileCard from "./ProfileCard";
```

### Forneça as Props

Passe as seguintes props para o componente `ProfileCard`:

```jsx
<ProfileCard
  image="https://example.com/user-profile.jpg"
  name="John Doe"
  description="Engenheiro de Software e Entusiasta de Tecnologia"
  location="São Francisco, CA"
  aboutMe="Desenvolvedor apaixonado com talento para resolver problemas complexos."
  pcSpecs={{
    cpu: "Intel Core i7-12700K",
    ram: "16GB DDR5",
    gpu: "NVIDIA RTX 3070",
  }}
  social={{
    facebook: "https://facebook.com/johndoe",
    twitch: "https://twitch.tv/johndoe",
    youtube: "https://youtube.com/johndoe",
    instagram: "https://instagram.com/johndoe",
  }}
/>
```

---

## Props

| Nome da Prop  | Tipo     | Obrigatório | Descrição                                         |
| ------------- | -------- | ----------- | ------------------------------------------------- |
| `image`       | `string` | Sim         | URL da imagem de perfil.                          |
| `name`        | `string` | Sim         | Nome do usuário.                                  |
| `description` | `string` | Sim         | Breve descrição sobre o usuário.                  |
| `location`    | `string` | Sim         | Localização do usuário.                           |
| `aboutMe`     | `string` | Sim         | Biografia detalhada sobre o usuário.              |
| `pcSpecs`     | `object` | Sim         | Especificações do PC (CPU, RAM, GPU).             |
| `social`      | `object` | Não         | Links para redes sociais (Facebook, Twitch, etc). |

---

## Exemplo

```jsx
import React from "react";
import ReactDOM from "react-dom";
import ProfileCard from "./ProfileCard";

ReactDOM.render(
  <ProfileCard
    image="https://example.com/profile.jpg"
    name="Jane Smith"
    description="Desenvolvedora Frontend & Designer"
    location="Nova York, NY"
    aboutMe="Pensadora criativa com paixão por criar experiências de usuário incríveis."
    pcSpecs={{
      cpu: "AMD Ryzen 9 5900X",
      ram: "32GB DDR4",
      gpu: "NVIDIA RTX 3080",
    }}
    social={{
      instagram: "https://instagram.com/janesmith",
      youtube: "https://youtube.com/janesmith",
    }}
  />,
  document.getElementById("root")
);
```

---

## Dependências

- `react`
- `styled-components`
- `prop-types`
- `react-icons`

Instale-as com:

```bash
npm install react styled-components prop-types react-icons
```

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

## Autor

Desenvolvido por [Seu Nome](https://github.com/seuusuario). Fique à vontade para entrar em contato para colaborações ou dúvidas!
