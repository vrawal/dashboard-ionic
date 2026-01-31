# Dashboard Ionic

An Ionic Angular dashboard application designed to work seamlessly on both mobile (iPhone) and Windows desktop platforms.

## Features

- 📱 **Cross-platform**: Works on iOS, Android, and Desktop (Windows, macOS, Linux)
- 📊 **Responsive Dashboard**: Adaptive layout that looks great on any screen size
- 🎨 **Modern UI**: Built with Ionic components for a native-like experience
- 📈 **Statistics Cards**: Display key metrics with icons and trends
- 📋 **Activity Feed**: Track recent user activities
- ⚡ **Quick Actions**: Easy access to common tasks
- 🔄 **Pull to Refresh**: Refresh dashboard data with a simple gesture

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- npm or yarn
- Ionic CLI: `npm install -g @ionic/cli`

## Installation

1. Clone the repository (or navigate to the project directory)

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Web Browser (Development)
```bash
ionic serve
```
or
```bash
npm start
```

The application will open in your default browser at `http://localhost:8100`

### iOS (requires macOS)
```bash
ionic capacitor add ios
ionic capacitor sync ios
ionic capacitor open ios
```

### Android
```bash
ionic capacitor add android
ionic capacitor sync android
ionic capacitor open android
```

### Desktop (Electron - Optional)
For desktop deployment, you can use Capacitor's Electron platform or build as a PWA.

## Project Structure

```
dashboard-ionic/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   └── dashboard/     # Dashboard page components
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/                # Images, icons, etc.
│   ├── theme/                 # Ionic theme variables
│   ├── global.scss           # Global styles
│   └── index.html
├── angular.json
├── ionic.config.json
├── capacitor.config.ts
└── package.json
```

## Customization

### Theme Colors
Edit `src/theme/variables.scss` to customize the color scheme for both light and dark modes.

### Dashboard Widgets
Modify `src/app/pages/dashboard/dashboard.page.ts` to add or update dashboard statistics and activities.

### Responsive Layout
The dashboard uses CSS Grid for responsive layouts. Adjust breakpoints in `src/app/pages/dashboard/dashboard.page.scss`:
- Mobile: < 576px
- Tablet: 576px - 767px
- Desktop: ≥ 768px

## Building for Production

### Web (PWA)
```bash
ionic build --prod
```

### iOS
```bash
ionic build --prod
ionic capacitor sync ios
```

### Android
```bash
ionic build --prod
ionic capacitor sync android
```

## Technologies Used

- **Ionic Framework** 7.5+
- **Angular** 17+
- **Capacitor** 5.5+
- **TypeScript** 5.2+

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please refer to:
- [Ionic Documentation](https://ionicframework.com/docs)
- [Angular Documentation](https://angular.io/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
