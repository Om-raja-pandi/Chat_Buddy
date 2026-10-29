export const WALLPAPER_SECTIONS = [
  { id: "desktop", title: "Desktop" },
  { id: "abstract", title: "Abstract" },
];

export const WALLPAPERS = [

  {
    id: "redwoods",
    category: "desktop",
    label: "Redwoods",
    url: "/wallpapers/redwoods.jpg",
  },
  {
    id: "iceland-coast",
    category: "desktop",
    label: "Iceland Coast",
    url: "/wallpapers/iceland-coast.jpg",
  },
  {
    id: "new-york-midtown",
    category: "desktop",
    label: "New York Midtown",
    url: "/wallpapers/new-york-midtown.jpg",
  },
  {
    id: "macos-graphic",
    category: "abstract",
    label: "macOS Graphic",
    url: "/wallpapers/macos-graphic.jpg",
  },
  {
    id: "radial-purple",
    category: "abstract",
    label: "Radial Purple",
    url: "/wallpapers/radial-purple.jpg",
  },
  {
    id: "radial-green",
    category: "abstract",
    label: "Radial Green",
    url: "/wallpapers/radial-green.jpg",
  },
  {
    id: "radial-blue",
    category: "abstract",
    label: "Radial Blue",
    url: "/wallpapers/radial-blue.jpg",
  },
];

export function frameStyleFromUrl(url) {
  return {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function getWallpaperById(id) {
  return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
}