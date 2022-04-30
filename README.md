# Optimized Chat Interface

Optimized Chat Interface is a more user-friendly UI for ChatGPT. It's completely Open Source, and utilizes Angular and Nest technologies.

The Angular code base follows a number of best practices with minimal external dependencies.

This repository is a monorepo managed by [Nx](https://nx.dev) and currently includes the following apps:

- chat: the Angular front end

## Features

The project is currently under development, but we've noted future features that we are planning to implement. If you have any suggestions or would like to contribute, feel free to open an issue.

## Existing features

- [x] As a user, you can enter your OpenAI API key (saved to local storage)
- [x] View your chat history (saved to local storage)
- [x] Delete chats
- [x] Start a new chat
- [x] Update the title of a chat
- [x] Update your profile picture
- [x] Streaming the chat response
- [x] Deployment capabilities
- [x] Auto-generated titles when creating a new chat
- [x] Send a new message via enter key or button click
- [x] Set the model for the current chat
- [x] Select the temperature for the current chat
- [x] Set the initial system message for the current chat
- [x] Set a default model for future chats
- [x] Set a default temperature for future chats
- [x] Set a default initial system message for future chats
- [x] Mark chats as favourites

## Planned features/technical improvements

- [ ] Group chats in a folder
- [ ] Choose from a list of default messages
- [ ] Toggle between light and dark mode
- [ ] Loading animations
- [ ] Select a prompt from a prompt library
- [ ] Markup for responses (e.g. bold, italic, links, etc.)
- [ ] Markup for code examples in responses
- [ ] View chat history in a timeline (grouped by date) Today - yesterday - last 7 days - last 30 day