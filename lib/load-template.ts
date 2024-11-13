const html = String.raw

export function loadTemplate(script: HTMLElement) {
  const containerId = script?.getAttribute("data-container-Id")
  const humanInput = script?.getAttribute("data-human-input")

  const root = document.createElement("div")
  root.id = "humanist-lib-root"
  root.className = "humanist-lib-root"

  root.innerHTML = html`<span>Humanist</span><span class="human-input">${humanInput}</span>`

  const container = containerId ? document.getElementById(containerId) : document.body
  if (!container) return

  document.getElementById("humanist-lib-root")?.remove()
  container.appendChild(root)
}
