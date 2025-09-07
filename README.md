<a name="readme-top"></a>

<div align="center">

<a href="https://github.com/Alvarog0218/campodecreadores">
  <img width="300px" src="/public/c.png" alt="Logo Campo de Creadores" width="800" />
</a>

## Web oficial de Campo de Creadores

Campo de Creadores es un evento que fusiona fútbol e influencers en un show único que cambia en cada edición.\

</div>

<details>
<summary>Tabla de contenidos</summary>

- [Web oficial de Campo de Creadores](#web-oficial-de-campo-de-creadores)
- [Características principales](#características-principales)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
- [🛠️ Stack](#️-stack)

</details>

## Características principales

- **Detalles del evento**: Obtén información detallada sobre la fecha, hora, ubicación y participantes.
- **Equipos y Ediciones**: Conoce los equipos y revisa el historial de ediciones pasadas.
- **Redes sociales**: Conoce las redes oficiales donde podrás informarte sobre el evento.

### Capturas de pantalla

<!-- ![Captura de pantalla en ordenador](...) -->
<!-- ![Captura de pantalla en móvil](...) -->

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- NVM (recomendado para asegurar versión de Node) ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # o
  nvm use <version>
  ```

  > Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

<details>
	<summary>Pequeño script de automatización</summary>
	
- En Linux/MacOS:
	```sh
	# .bashrc | .zshrc | cualquier archivo de configuración
	# pequeño script para cambiar de version al entrar al directorio
	cd() {
  builtin cd "$@"
		if [[ -f .nvmrc ]]; then
			nvm use > /dev/null
			# Si quieres que te diga la versión
			nvm use
		fi
	}
	```

- En Windows:

  ```powershell
  # $PROFILE
  function Change-Node-Version {
  	param($path)
  	& Set-Location $path
  	$pwd = pwd
  	if ( Test-Path "$pwd\\.nvmrc" ) {
  		$version = Get-Content .nvmrc
  		nvm use $version
  	}
  }
  New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
  ```

  </details>

- PNPM (es nuestra recomendación por su eficiencia y rapidez)

  ```sh
  npm install -g pnpm
  ```

- o NPM

  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Clona el repositorio

   ```sh
   git clone https://github.com/Alvarog0218/campodecreadores.git
   ```

2. Instala los paquetes de NPM

   ```sh
   pnpm install
   ```

3. Ejecuta el proyecto

   - Base de datos remota (necesario linkear con proyecto de Astro Studio)

   ```sh
   pnpm run dev
   ```

   - Base de datos local

   ```sh
   pnpm run start
   ```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

gracias
