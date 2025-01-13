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
  <h1>What is the purpose of the app?</h1>
  <p>The Devy app was developed to run ambient and lofi sounds in the background, it also has a built-in pomodoro that contains a default setting of 25 minutes of study and 5 minutes of rest, you can see a demo of the app working at the link below:</p>
  <img src="https://i.ibb.co/NWhdcHX/image.png" alt="app-demonstration" />
</div>

<div>
  <h1>How to download?</h1>
  <p>You can download all versions of devy in releases section:</p>
  <a href="https://github.com/FhillSlinger/devy/releases">Downloads</a>
  <br />
  <br />
  <p>Access the page and download .msi instaler file, just a heads up, the Devy app only works on windows currently.</p>
</div>

<div>
  <h1>What technologies did Devy use for development?</h1>
  <ul>
    <li>Tauri</li>
    <li>React.js</li>
    <li>Styled-Components</li>
    <li>Typescript</li>
  </ul>
</div>

<div>
  <h1>How to start the project?</h1>
  <p>Start using this command in terminal, this project use LFS(Git Large File System) then you have some problems with sounds on download repository directly from github:</p>
  <pre>git clone https://github.com/FhillSlinger/devy.git</pre>
  <p>Open the project folder in terminal:</p>
  <pre>cd devy</pre>
  <p>Execute the yarn command to install the dependencies, the project use yarn but if you want, you can change to npm or other package manager:</p>
  <pre>yarn</pre>
  <p>And finally use the next command to run desktop app in debug mode:</p>
  <pre>yarn tauri dev</pre>

  <p>If you want to build your app in a .msi file you can use the command:</p>
  <pre>yarn tauri build</pre>
  <p>the .msi file is located in <code>src-tauri/target/release/bundle/msi</code> </p>
</div>
