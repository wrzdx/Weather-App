# Weather Application

A weather forecast application built with JavaScript and Webpack as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Preview

![Weather App Preview 1](./preview1.png)  
![Weather App Preview 2](./preview2.png)  

**Live Demo**: [Your GitHub Pages Link Here](https://wrzdx.github.io/Weather-App/)

## Features
- Real-time weather data from VisualCrossing API
- Temperature display in °C/°F toggle
- Responsive design with dark/light theme
- Weather condition icons

## Key Concepts
✅ API integration with async/await  
✅ JavaScript Class for weather data handling  
✅ Webpack asset management  
✅ Dynamic DOM rendering  
✅ Error handling for failed requests  
✅ Responsive CSS design  

## Core Functionality
- Get current weather by location
- Display weather conditions with appropriate icons
- Toggle temperature units
- Handle invalid location inputs

## How to Run
1. Clone the repository:
```bash
git clone https://github.com/your-username/weather-app.git
```
2. Install dependencies:
```bash
npm install
```
3. Add your API key:
```bash
echo "API_KEY=your_visualcrossing_key" > .env
```
4. Start development server:
```bash
npm run dev
```
5. Open `http://localhost:8080` in your browser

For production build:
```bash
npm run build
```

## API Reference
Uses [VisualCrossing Weather API](https://www.visualcrossing.com/weather-api)

---

*Part of The Odin Project's [JavaScript Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript)*  
*Focuses on API integration and asynchronous JavaScript*  
