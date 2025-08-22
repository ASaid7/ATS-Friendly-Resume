# ATS-Friendly Resume Builder

A modern, interactive resume builder designed to create ATS (Applicant Tracking System) friendly resumes with customizable font sizes and multiple export formats. Built with React and Vite for fast development and optimal performance.

## Features

- ✅ **ATS-Friendly Design** - Clean, simple formatting that passes through applicant tracking systems
- 🎨 **Customizable Font Sizes** - Adjust fonts for headers, body text, bullet points, and more
- 💾 **Save & Load** - Save resume versions as JSON files for backup and version control
- 📄 **Multiple Export Formats** - Export as Text, HTML, or PDF
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🔄 **Real-time Preview** - See changes instantly as you edit
- 🗂️ **Dynamic Sections** - Add/remove/reorder resume sections with drag-and-drop

## Prerequisites

Before installing, you'll need:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation Instructions

### Windows

#### Step 1: Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the "LTS" version for Windows (usually the left button)
3. Run the downloaded `.msi` file
4. Follow the installation wizard (keep all default settings)
5. Restart your computer after installation

#### Step 2: Verify Installation
1. Press `Win + R`, type `cmd`, and press Enter
2. Type the following commands to verify:
   ```cmd
   node --version
   npm --version
   ```
3. You should see version numbers (e.g., v18.17.0 and 9.6.7)

#### Step 3: Download and Setup Project
1. Download this project:
   - Option A: Download ZIP from GitHub and extract it
   - Option B: Clone with Git: `git clone [repository-url]`
2. Open Command Prompt and navigate to the project folder:
   ```cmd
   cd path\to\resume-builder
   ```
3. Install dependencies:
   ```cmd
   npm install
   ```

#### Step 4: Run the Application
```cmd
npm run dev
```
The application will open at `http://localhost:5173`

---

### macOS

#### Step 1: Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the "LTS" version for macOS
3. Open the downloaded `.pkg` file
4. Follow the installation wizard
5. Restart your terminal after installation

#### Step 2: Verify Installation
1. Open Terminal (Cmd + Space, type "Terminal")
2. Type the following commands:
   ```bash
   node --version
   npm --version
   ```
3. You should see version numbers

#### Step 3: Download and Setup Project
1. Download this project:
   - Option A: Download ZIP from GitHub and extract it
   - Option B: Clone with Git: `git clone [repository-url]`
2. Open Terminal and navigate to the project folder:
   ```bash
   cd /path/to/resume-builder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

#### Step 4: Run the Application
```bash
npm run dev
```
The application will open at `http://localhost:5173`

---

### Linux (Ubuntu/Debian)

#### Step 1: Install Node.js
```bash
# Update package manager
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

For other Linux distributions:
- **Fedora/RHEL/CentOS**: `sudo dnf install nodejs npm`
- **Arch Linux**: `sudo pacman -S nodejs npm`

#### Step 2: Download and Setup Project
1. Download this project:
   ```bash
   # Option A: Clone with Git
   git clone [repository-url]
   cd resume-builder
   
   # Option B: Download and extract ZIP manually
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

#### Step 3: Run the Application
```bash
npm run dev
```
The application will open at `http://localhost:5173`

---

## Usage

### Getting Started
1. **Edit Your Information**: Fill in your name, title, contact information
2. **Adjust Font Sizes**: Use the "Font Size Settings" section to customize typography
3. **Add Content**: Use the provided sections or add custom ones
4. **Preview**: See real-time preview on the right side
5. **Save Your Work**: Click "Save" to download your resume as a JSON file
6. **Export**: Choose from Text, HTML, or PDF export formats

### Managing Multiple Resumes
- **Save**: Click the "Save" button to download your current resume as a JSON file
- **Load**: Click the "Load" button to select and load a previously saved resume
- **Organize**: Create folders on your computer to organize different resume versions

### Font Size Customization
Adjust individual font sizes for:
- **Name Header** - Your name at the top
- **Job Title** - Professional title/tagline
- **Contact Info** - Email, phone, location
- **Section Headers** - EXPERIENCE, EDUCATION, etc.
- **Body Text** - General paragraph text
- **Bullet Points** - List items in experience section

### Export Options
- **Text** (.txt) - Best for ATS systems, plain text format
- **HTML** (.html) - For web viewing with preserved formatting
- **PDF** - Click to open print dialog, then "Save as PDF"

## Troubleshooting

### Common Issues

#### "npm is not recognized" (Windows)
- Restart your command prompt after installing Node.js
- Restart your computer if the issue persists

#### Permission errors (macOS/Linux)
```bash
# If you get permission errors, try:
sudo npm install -g npm@latest
```

#### Port already in use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

#### Browser doesn't open automatically
Manually navigate to `http://localhost:5173` in your browser

### Getting Help
1. Make sure Node.js version is 16 or higher: `node --version`
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
resume-builder/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure all prerequisites are installed correctly
3. Try deleting `node_modules` and running `npm install` again
4. Open an issue on GitHub with details about your problem

---

**Happy resume building!** 🚀