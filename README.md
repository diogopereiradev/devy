<div align="center">
  <img width="200px" src="/public/favicons/android-chrome-512x512.png" alt="app-logo"/>
  <h1>Devy&nbsp;</h1>
</div>

<div align="center">
  <img src="https://img.shields.io/github/package-json/v/FhillSlinger/devy" alt="version-badge"/>
  <img src="https://img.shields.io/github/license/FhillSlinger/devy" alt="license-badge"/>
  <img src="https://img.shields.io/github/directory-file-count/FhillSlinger/devy" alt="files-count-badge"/>
  <img src="https://img.shields.io/github/downloads/FhillSlinger/devy/total" alt="downloads-badge"/>
  <img src="https://img.shields.io/github/languages/count/FhillSlinger/devy" alt="languages-count-badge"/>
  <img src="https://img.shields.io/github/languages/top/FhillSlinger/devy" alt="more-used-language-badge"/>
  <img src="https://img.shields.io/github/contributors/FhillSlinger/devy" alt="contributors-badge"/>
</div>

<div>
  <h1>Qual o propósito do app?</h1>
  <p>O app Devy foi desenvolvido para rodar sons ambientes e lofi de fundo, ele também tem um pomodoro embutido que contém uma configuração padrão de 25 minutos de estudos e 5 minutos de descanso, você pode ver uma demonstração do app funcionando no link abaixo:</p>
  <a href="https://www.dropbox.com/s/oyopzni2uolhbqx/20230107_091556.mp4?dl=0">Demonstração</a>
</div>

<div>
  <h1>Como obter o app versão lançamento?</h1>
  <p>Você consegue obter todas as versões do app na seção de releases do repositório:</p>
  <a href="https://github.com/FhillSlinger/devy/releases">Downloads</a>
  <br />
  <br />
  <p>Só avisando, o app Devy funciona apenas no windows, ao acessar a página de releases do repositório, baixe o arquivo .msi da versão "latest", ele é o instalador do app.</p>
</div>

<div>
  <h1>Quais tecnologias foram usadas para o desenvolvimento?</h1>
  <ul>
    <li>Tauri</li>
    <li>React.js</li>
    <li>Styled-Components</li>
    <li>Typescript</li>
  </ul>
</div>

<div>
  <h1>Como iniciar o projeto para debugar?</h1>
  <p>Vamos começar clonando o repositório, este projeto usa o LFS(Git Large File System) para armazenar os sons, então caso você baixe diretamente do github, você não terá acesso aos sons:</p>
  <pre>git clone https://github.com/FhillSlinger/devy.git</pre>
  <p>Abra a pasta do projeto no terminal:</p>
  <pre>cd devy</pre>
  <p>Execut o comando yarn para instalar as dependencias, o projeto usa o yarn mas caso queira você pode trocar por algum outro gerenciador de pacotes:</p>
  <pre>yarn</pre>
  <p>E finalmente chegamos no comando que inicia o app em modo de debug:</p>
  <pre>yarn tauri dev</pre>

  <p>Caso você queira buildar o app para versão de release você pode utilizar o comando abaixo:</p>
  <pre>yarn tauri build</pre>
  <p>O arquivo .msi após o build fica na pasta <code>src-tauri/target/release/bundle/msi</code> </p>
</div>