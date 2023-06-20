import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="count"
export default class extends Controller {
  connect() {
    this.count = 0
  }

  increment() {
    this.count++
    this.element.innerText = `Count is : ${this.count}`
  }
}
