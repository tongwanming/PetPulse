export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./data/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F1",
        peach: "#FFD8C2",
        coral: "#F78F6B",
        mint: "#CDEFD8",
        pine: "#21403A",
        ink: "#24303A",
        sand: "#F9E8D9"
      },
      boxShadow: {
        float: "0 20px 45px rgba(34, 55, 67, 0.12)"
      },
      borderRadius: {
        blob: "2rem"
      }
    }
  },
  plugins: []
};
