# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (Vite with HMR)
- `npm run build` - Build production version
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

## Project Structure

This is a React-based resume builder application with the following architecture:

### Core Application
- **Single Page Application**: Built with React 19 and Vite
- **Main Component**: `src/App.jsx` contains the entire ResumeBuilder component (~1240 lines)
- **Styling**: Tailwind CSS for UI components and styling
- **Icons**: Lucide React for UI icons

### Resume Builder Features
The application is a comprehensive resume editor with real-time preview:

1. **Dynamic Section Management**:
   - Drag-and-drop reordering of resume sections
   - Add/remove sections dynamically
   - Section types: Experience, Education, Skills, Publications, Custom

2. **Content Types**:
   - Header information (name, title, contact details)
   - Professional summary
   - Work experience with bullet points
   - Education entries
   - Publications with detailed metadata
   - Skills sections with free-form text

3. **Export Capabilities**:
   - Plain text export (ATS-friendly)
   - HTML export with embedded CSS
   - PDF export via browser print dialog

### State Management
- Uses React useState hooks for all application state
- Resume data structure includes header, summary, and sections array
- Each section has a type that determines its rendering and editing interface

### Key Implementation Details
- Auto-resizing textareas for dynamic content
- Bullet point management with add/delete/reorder functionality
- Real-time preview that mirrors ATS-friendly formatting
- Drag-and-drop interface for section reordering

### Dependencies
- React 19 with React DOM
- Vite for build tooling and development server
- Tailwind CSS for styling
- Lucide React for icons
- ESLint for code quality

## Development Notes

The codebase is contained in a single large component file. When making modifications:
- The resume state object is the central data structure
- Section types ('experience', 'education', 'skills', 'publications', 'custom') determine UI behavior
- Export functions generate different formats from the same data structure
- All styling uses Tailwind utility classes