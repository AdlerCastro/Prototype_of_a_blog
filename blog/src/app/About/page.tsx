import React from 'react'
import './styles.css'

export default function About() {
  return (
    <main className='main-about'>
      <h1>Descrição do Projeto de Blog por um Desenvolvedor Iniciante</h1>
      <h2>Projeto Blogzin</h2>
      <div className='with-subtopics'>
        <h2>Descrição:</h2>
        <p>Blogzin é um projeto desenvolvido por um entusiasta da programação em seu estágio inicial de aprendizado. Este blog foi criado como parte de um curso preparatório para aprofundar os conhecimentos em desenvolvimento web usando tecnologias modernas.</p>
      </div>
      <div>
        <ul className='with-subtopics'>
          <h2>Tecnologias Utilizadas:</h2>
          <li>
            <h3>Next.js:</h3>
            <p>Escolhido pela sua capacidade de renderização rápida e eficiente, além de suporte integrado para Server-side Rendering &#40;SSR&#41; e Static Site Generation &#40;SSG&#41;, o que torna ideal para um blog que precisa ser otimizado para SEO.</p>
          </li>
          <li>
            <h3>TypeScript:</h3>
            <p>Utilizado para adicionar tipagem estática ao JavaScript, proporcionando um código mais robusto e menos propenso a erros. Ideal para um desenvolvedor iniciante que deseja aprender boas práticas desde o início.</p>
          </li>
          <li>
            <h3>Mongoose:</h3>
            <p>Biblioteca de modelagem de objetos MongoDB para Node.js. Perfeito para lidar com os dados do blog de forma eficiente e estruturada, permitindo a criação de modelos e a interação com o banco de dados MongoDB de forma simplificada.</p>
          </li>
          <li>
            <h3>NextAuth:</h3>
            <p>Escolhido para a autenticação no projeto devido à sua facilidade de implementação com Next.js, proporcionando um fluxo de autenticação seguro e eficiente. Com suporte para vários provedores de autenticação, como Google, Facebook e GitHub, o NextAuth facilita a integração de autenticação social e tradicional no blog.</p>
          </li>
        </ul>
      </div>
      <div>
        <ul className='with-subtopics'>
          <h2>Funcionalidades Implementadas:</h2>
          <li>
            <h3>Autenticação de Usuário:</h3>
            <p>Utilizando NextAuth para permitir que os usuários se autentiquem de forma segura e fácil, utilizando suas contas de redes sociais ou e-mail.</p>
          </li>
          <li>
            <h3>Gerenciamento de Postagens:</h3>
            <p>Implementação de CRUD básico para permitir que os usuários criem, leiam, atualizem e excluam postagens no blog.</p>

          </li>
          <li>
            <h3>SEO Otimizado:</h3>
            <p>Aproveitando as capacidades de SSR e SSG do Next.js para garantir que o blog seja otimizado para mecanismos de busca, melhorando a visibilidade das postagens.</p>
          </li>
          <li>
            <h3>Integração com MongoDB:</h3>
            <p>Utilizando Mongoose para definir e interagir com modelos de dados, armazenando informações como postagens, usuários e comentários de forma estruturada no MongoDB.</p>
          </li>
        </ul>
      </div>
      <div className='with-subtopics'>
        <h2>Próximos Passos:</h2>
        <p>O desenvolvedor iniciante pretende expandir o projeto implementando novas funcionalidades, como sistema de comentários, categorização de postagens, e talvez até uma interface de administração para gerenciar conteúdo de forma mais eficiente.</p>
      </div>
      <div className='with-subtopics'>
        <h2>Conclusão:</h2>
        <p>Blogzin não é apenas um projeto educativo, mas também uma oportunidade para o desenvolvedor iniciante aplicar seus conhecimentos teóricos em um ambiente prático. Ao utilizar tecnologias modernas como Next.js, TypeScript, Mongoose e NextAuth, o desenvolvedor está preparando uma base sólida para projetos futuros e para se destacar no mundo do desenvolvimento web.</p>
      </div>
    </main>
  )
}  