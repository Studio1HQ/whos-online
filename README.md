<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/whos-online.webp" alt="Who's Online Presence Wall with Velt: A live wall showing who is online, away or active, with shared cursors" width="100%" />

<br />
<br />

# Who's Online Presence Wall with Velt

### A live wall showing who is online, away or active, with shared cursors

A Next.js app that uses Velt Presence to show everyone viewing a page with their status, plus live cursors and comments.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://whos-online.vercel.app)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

A small Next.js app that shows real-time presence with [Velt](https://velt.dev). Users sign in with a name and email, and a wall displays everyone currently in the shared document, with a status indicator for each person. It was written as a demo of building presence into an app with the Velt SDK.

## Features

- **Presence wall**: Cards for every user from the `usePresenceUsers` hook, with the current user listed first.
- **Status indicators**: Online, away and active states shown with coloured dots.
- **Live cursors**: `VeltCursor` shows other users' cursors.
- **Comments**: `VeltComments` and `VeltCommentTool` are available on the same page.
- **Simple sign-in**: A form creates a user with a random colour and a contrasting text colour, stores it in `localStorage` and calls `client.identify`.
- **Logout**: `client.signOutUser()` ends the session and clears the stored user.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 15, React 19 |
| Collaboration | [Velt](https://velt.dev) (`@veltdev/react`) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 3 |
| Language | [TypeScript](https://www.typescriptlang.org) |

## Getting started

### Prerequisites

- Node.js 18 or later
- npm, yarn, pnpm or bun
- A Velt account and API key from the [Velt console](https://console.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/whos-online.git
cd whos-online
npm install
```

### Environment variables

Create `.env.local` in the project root.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_VELT_API_KEY` | Your Velt API key. Passed to `VeltProvider`. |

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Sign in from two browsers to see both users appear.

## How it works

```text
src/app/
  page.tsx                     Shows UserAuth, then the wall and logout button
  provider/VeltProvider.tsx    Wraps the app in VeltProvider with the API key
  components/UserAuth.tsx      Sign-in form, client.identify, client.setDocument
  components/OnlineWall.tsx    usePresenceUsers, VeltCursor, VeltComments
  components/LogoutButton.tsx  client.signOutUser
```

`UserAuth` builds a user (`userId` is the email, plus `name`, `email`, `color`, `textColor`), identifies it with Velt and sets the document `whos-online-wall`. `OnlineWall` reads the presence list and renders one card per user, using each user's `onlineStatus`.

## Resources

- [Live demo](https://whos-online.vercel.app): Deployed version of this app.
- [Velt documentation](https://docs.velt.dev): SDK reference, including Presence.
- [Velt](https://velt.dev): Product site.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
