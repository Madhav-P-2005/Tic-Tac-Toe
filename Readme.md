# 🎮 Tic-Tac-Toe | Interactive JavaScript Web Game

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![FontAwesome](https://img.shields.io/badge/FontAwesome-6.5-528DD7?logo=fontawesome&logoColor=white&style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=github&logoColor=white&style=for-the-badge)

A dual-mode **Tic-Tac-Toe** game built entirely with **vanilla HTML, CSS, and JavaScript** — no frameworks, no libraries. Features Player vs Computer and Player vs Friend modes with responsive design, smooth animations, and win detection.

---

## 🚀 Live Demo

[![Play Now](https://img.shields.io/badge/Play%20Now-Tic%20Tac%20Toe-brightgreen?style=for-the-badge)](https://madhav-p-2005.github.io/Tic-Tac-Toe/)

---

## ✨ Features

- 🖥️ **Player vs Computer** — Play against a random AI opponent
- 🫂 **Player vs Friend** — Local multiplayer on the same device
- 🏆 **Win Detection** — Checks all 8 combinations (3 rows, 3 columns, 2 diagonals)
- ✨ **Winning Highlight** — Line-through effect with color change on winning cells
- 🤝 **Draw Detection** — Automatically announces a draw when the board is full
- 🔄 **Auto Reset** — Board resets when switching between modes
- 🎬 **Typewriter Animation** — Animated welcome text on the landing page
- 📱 **Fully Responsive** — Desktop, Tablet, and Mobile layouts
- 🌈 **Hover Effects** — Interactive feedback on cells and buttons

---

## 🕹️ How to Play

1. Open the app and click **Start**
2. Choose your mode:
   - 🖥️ **Play Against Computer** — You are X, Computer is O
   - 🫂 **Play with a Friend** — Take turns on the same device
3. Click on a cell to place your mark
4. The game announces the **winner** or a **draw** automatically

---

## 🗂️ Project Structure

```text
Tic-Tac-Toe/
├── index.html        # Landing page (Welcome + Start button)
├── Second.html       # Game page (Mode selection + Boards)
├── Style.css         # Landing page styles (responsive)
├── Style2.css        # Game page styles (responsive)
├── Logic.js          # Game logic (navigation, modes, win detection)
└── Readme.md         # This file
```

---

## 🧠 Game Logic — How It Works

### Win Detection Algorithm

The game checks all **8 possible winning combinations** after every move:

```javascript
let Possibilities = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];
```

### Board Layout (cell IDs)

```text
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8
```

### Architecture

```text
User clicks "Start"
     │
     ▼
┌────────────────────────┐
│  Mode Selection        │
│  🖥️ Computer  🫂 Friend │
└───────┬────────┬───────┘
        │        │
        ▼        ▼
   ┌─────────┐ ┌─────────┐
   │ Board1  │ │ Board2  │
   │ (vs AI) │ │ (vs 2P) │
   └────┬────┘ └────┬────┘
        │            │
        ▼            ▼
   checkWinner()  checkWinnerFriend()
        │            │
        ▼            ▼
   Display result in scoreboard
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Target | Changes |
|-----------|--------|---------|
| `> 768px` | Desktop | Side-by-side board + scoreboard |
| `≤ 768px` | Tablet | Stacked layout, smaller heading |
| `≤ 480px` | Mobile | Vertical mode buttons, compact board (240px) |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic page structure |
| **CSS3** | Styling, animations, media queries |
| **JavaScript (ES6+)** | Game logic, DOM manipulation, events |
| **FontAwesome 6.5** | Icons (home, social links) |
| **CSS Animations** | Typewriter effect, hover transitions |

---

## 📚 Concepts Demonstrated

- **DOM Manipulation** — `querySelector`, `querySelectorAll`, `innerText`
- **Event Handling** — `addEventListener('click', ...)`
- **State Management** — Board arrays, `gameActive` flags, `currentPlayer` tracking
- **Conditional Logic** — Win/draw detection with nested loops
- **CSS Animations** — `@keyframes` for typewriter and cursor effects
- **Responsive Design** — Flexbox, Grid, and `@media` queries
- **Multi-page Navigation** — `window.location.href` for page routing

---

## 🚀 Run Locally

No build tools needed — just open in a browser!

```bash
# Clone the repository
git clone https://github.com/Madhav-P-2005/Tic-Tac-Toe.git

# Open index.html in your browser
# On Windows:
start index.html

# On Mac:
open index.html
```

---

## 🤝 Contributing

Feel free to fork this project and customize it. If you find bugs or have suggestions, please open an issue.

## 🪪 License

This project is open-source and available under the [MIT License](./LICENSE).

---

Built with 💖 by [Madhav P](https://www.linkedin.com/in/madhav-p-156b9b290/)
