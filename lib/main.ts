import { style } from "./style"

const html = String.raw
const css = String.raw

function main() {
  style()

  const script = document.querySelector("[data-humanist-badge]")
  if (!script) return

  const color = script?.getAttribute("data-color")
  const fontFamily = script?.getAttribute("data-font")
  const fontSize = script?.getAttribute("data-size")

  const position = script?.getAttribute("data-position")
  const positionY = position?.split("-")[0] === "top" ? "top: 0" : "bottom: 0"
  const positionX = position?.split("-")[1] === "left" ? "left: 0" : "right: 0"

  const humanInput = script?.getAttribute("data-human-input")

  document.querySelector("[data-humanist-badge]")?.remove()

  const styleTag = document.createElement("style")
  styleTag.setAttribute("data-humanist-styles", "")

  styleTag.textContent = css`
    .humanist-root {
      border: 1px solid rgb(0, 0, 0, 0.03);
      border-radius: 0.5em;
      color: ${color};
      display: flex;
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
      line-height: 1;
      margin: 0.3em 0.6em;
      padding: 0.3em 0.6em;
      pointer-events: none;

      position: absolute;
      ${positionY};
      ${positionX};

      box-shadow:
        1px 1px 2px 0px #00000008,
        1px 1px 2px 0px #00000008,
        3px 3px 4px 0px #00000008,
        8px 6px 6px 0px #00000005,
        14px 11px 7px 0px #00000000,
        22px 17px 8px 0px #00000000;

      width: max-content;
    }

    .human-input {
      opacity: 0.3;
    }
  `
  document.head.appendChild(styleTag)

  const root = document.createElement("div")
  root.innerHTML = html`<div class="humanist-root">
    <span>Humanist</span><span class="human-input">${humanInput}</span>
  </div>`

  document.body.appendChild(root)
}

main()