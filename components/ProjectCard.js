class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const tag0 = this.getAttribute("tag0") || "";
    const tag1 = this.getAttribute("tag1") || "";
    const tag2 = this.getAttribute("tag2") || "";
    const tag3 = this.getAttribute("tag3") || "";
    const tag4 = this.getAttribute("tag4") || "";
    const isCompleted = this.getAttribute("status") === "true" ? true : false;

    this.innerHTML = `
      <article class="project">
        <div class="head">
          <h2>${this.getAttribute("name")}</h2>
          <button>View Project</button>
        </div>
        <p>${this.getAttribute("desc")}</p>
        <div class="foot">
          <div class="tags">
            ${tag0 && `<span class="${tag0.toLowerCase()}">${tag0}</span>`}
            ${tag1 && `<span class="${tag1.toLowerCase()}">${tag1}</span>`}
            ${tag2 && `<span class="${tag2.toLowerCase()}">${tag2}</span>`}
            ${tag3 && `<span class="${tag3.toLowerCase()}">${tag3}</span>`}
            ${tag4 && `<span class="${tag4.toLowerCase()}">${tag4}</span>`}
          </div>
          <span class="status">${isCompleted ? "PROD" : "DEV"}</span>
        </div>
      </article>
    `;
  }
}

customElements.define("project-card", ProjectCard);
