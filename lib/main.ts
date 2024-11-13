import { loadFonts } from "./load-fonts"
import { loadStyles } from "./load-styles"
import { loadTemplate } from "./load-template"

function main() {
  const script = document.getElementById("humanist-badge-lib")
  if (!script) return

  loadFonts()
  loadStyles(script)
  loadTemplate(script)
}

if (document.readyState === "complete") {
  main()
} else {
  document.addEventListener("load", main)
}
