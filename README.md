# Jotion - Fullstack Notion Clone

This repository contains the code for Jotion, a fullstack Notion clone built with Next.js 13, React, Convex, and Tailwind. The project includes a variety of features to enhance your note-taking and collaboration experience.

![jotion](https://github.com/jurecapuder/jotion/assets/127134124/186b00cc-38bd-45ba-87dd-2825e5790489)

## Key Features

- 🔄 **Real-time Database:** Keep your data synchronized across users in real-time.
- ✍️ **Notion-Style Editor:** Enjoy a familiar editing interface inspired by Notion.
- 🌓 **Light and Dark Mode:** Choose between light and dark themes for a comfortable reading experience.
- 🌐 **Infinite Children Documents:** Create a hierarchical structure with unlimited child documents.
- 🗑️ **Trash Can & Soft Delete:** Safely remove and recover your documents with soft delete functionality.
- 🔐 **Authentication:** Secure your data with user authentication.
- 📤 **File Management:**
  - File Upload
  - File Deletion
  - File Replacement

- 🖼️ **Icons for Each Document:** Experience dynamic real-time icon changes for each document.
- 📂 **Expandable Sidebar:** Easily navigate your workspace with an expandable sidebar.
- 📱 **Full Mobile Responsiveness:** Access Jotion seamlessly on various devices.
- 🌐 **Publish to the Web:** Share your notes with the world by publishing them to the web.
- ⬅️ **Fully Collapsible Sidebar:** Maximize your workspace with a fully collapsible sidebar.
- 🏠 **Landing Page:** Welcome users with a landing page for a smooth onboarding experience.
- 🌅 **Cover Image for Each Document:** Personalize your documents with cover images.
- ↩️ **Recover Deleted Files:** Restore accidentally deleted files from the trash.

## Prerequisites

Ensure that you have Node.js version 18.x.x installed.

### Cloning the repository

```shell
git clone https://github.com/jurecapuder/jotion.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
```

## Contributing

Feel free to contribute by opening issues, suggesting features, or submitting pull requests. Your input is valuable!

## License

This project is licensed under the [MIT License](LICENSE).

