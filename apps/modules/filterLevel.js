//custom filter level

export default function customFilterLevel() {
  const filterLevel = document.querySelector("#filterLevel")
  const dropdownBtn = filterLevel.querySelector(".dropdown-btn")
  const dropdownOptions = filterLevel.querySelector(".dropdown-options")
  const dropdownValue = filterLevel.querySelector(".dropdown-value")

  // Mở/Đóng danh sách tùy chọn
  dropdownBtn.addEventListener("click", () => {
    dropdownOptions.classList.toggle("active")
  })

  // Xử lý sự kiện khi chọn một tùy chọn
  filterLevel.querySelectorAll(".dropdown-options li").forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value")
      const text = option.textContent

      dropdownValue.textContent = text
      dropdownOptions.classList.remove("active")

      console.log("Selected:", value)
    })
  })

  // Đóng dropdown khi click ra ngoài
  filterLevel.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownOptions.contains(e.target)) {
      dropdownOptions.classList.remove("active")
    }
  })
}
