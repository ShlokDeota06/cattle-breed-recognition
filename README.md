# 🐄 Cattle Breed Recognition App

AI-powered cattle and buffalo breed recognition system for Bharat Pashudhan App.

## ✨ Features

- **🤖 AI-Powered Recognition**: Advanced machine learning for Indian cattle and buffalo breeds
- **📱 Mobile Friendly**: Optimized for field workers using mobile devices
- **🎨 Modern UI**: Beautiful, responsive design with smooth animations
- **🔄 Dynamic Backgrounds**: Auto-rotating background images with smooth transitions
- **📊 Breed Database**: Comprehensive database of Indian cattle and buffalo breeds
- **⚡ Fast Processing**: Quick breed identification with high accuracy

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with modern animations
- **Routing**: React Router DOM
- **Icons**: Emoji-based icons
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cattle-breed-recognition.git
   cd cattle-breed-recognition
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx           # Hero section with dynamic backgrounds
│   ├── UploadSection.jsx  # AI image upload functionality
│   └── Footer.jsx         # Footer component
├── pages/
│   ├── Home.jsx           # Landing page
│   ├── Upload.jsx         # Upload page
│   ├── BreedDatabase.jsx  # Breed database
│   ├── About.jsx          # About page
│   └── Contact.jsx        # Contact page
├── styles/
│   └── App.css           # Main stylesheet
└── App.jsx               # Main app component
```

## 🎨 Customization

### Adding Background Images
1. Place images in `public/` folder
2. Update `backgroundImages` array in `src/components/Hero.jsx`
3. Images will auto-rotate with smooth transitions

### AI Model Integration
Replace the mock processing in `src/components/UploadSection.jsx` with your actual AI model.

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select source as `gh-pages` branch

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Deploy automatically

## 📱 Features Overview

### Hero Section
- Dynamic background image rotation
- Smooth transitions between images
- Responsive text positioning
- Modern call-to-action buttons

### Upload Section
- Drag & drop image upload
- AI processing simulation
- Breed result display
- Confidence scoring

### Breed Database
- Filterable breed categories
- Detailed breed information
- Responsive card layout
- Search functionality ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Roadmap

- [ ] AI model integration
- [ ] User authentication
- [ ] Advanced breed filtering
- [ ] Mobile app version
- [ ] Multi-language support

## 📞 Support

For support and questions, please contact us through the contact page or create an issue in the repository.

---

**Built with ❤️ for the Bharat Pashudhan App initiative**
