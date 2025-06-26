# ![Redot Experimental Docs Cover](/.github/assets/cover.png)

![Issues](https://img.shields.io/github/issues-raw/Redot-Experimental/redot-experimental-docs?color=FFA726&label=issues&style=for-the-badge)
![Pull Requests](https://img.shields.io/github/issues-pr-raw/Redot-Experimental/redot-experimental-docs?color=FFA726&label=PRs&style=for-the-badge)
![Contributors](https://img.shields.io/github/contributors/Redot-Experimental/redot-experimental-docs?color=FFA726&label=contributors&style=for-the-badge)
![Lines](https://img.shields.io/endpoint?url=https://ghloc.vercel.app/api/Redot-Experimental/redot-experimental-docs/badge?style=flat&logoColor=white&color=FFA726&style=for-the-badge)
![Commit Activity](https://img.shields.io/github/commit-activity/m/Redot-Experimental/redot-experimental-docs?color=FFA726&label=commits&style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/Redot-Experimental/redot-experimental-docs?color=FFA726&label=last%20commit&style=for-the-badge)


<div align="center">

<h1 align="center">Redot Experimental Docs</h1>

Welcome to the official documentation repository for **Redot Experimental**! This repository houses all the information needed to use, develop, and contribute to the Redot Experimental ecosystem.
</div>

## Build from source

### Install Bun

Bun is a fast JavaScript runtime like Node.js, but with a built-in package manager. If you haven't installed it yet, you can do so by running:

```bash
curl -fsSL https://bun.sh/install | bash
```

Follow the instructions to complete the installation. After installation, ensure Bun is available by running:

```bash
bun --version
```

### Install Node Dependencies

Go to the project directory and install the Node dependencies using Bun:

```bash
cd redot-experimental-docs
bun install
```

## Running

Once everything is set up, you can run the following command to start the Astro development server:

```bash
bun dev
```

To build the Astro application for production, run the following command:

## Build for Production

Build the Astro application using the following command:

```bash
bun build
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## Contributors

<a href="https://github.com/Redot-Experimental/redot-experimental-docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Redot-Experimental/redot-experimental-docs" />
</a>

## License

The Redot Experimental Documentation is licensed under the [MIT License](LICENSE).
