//custom filter mark

export default function customFilterMark() {
  const filterMark = document.querySelector("#filterMark")
  const dropdownBtn = filterMark.querySelector(".dropdown-btn")
  const dropdownOptions = filterMark.querySelector(".dropdown-options")
  const dropdownValue = filterMark.querySelector(".dropdown-value")

  // Mở/Đóng danh sách tùy chọn
  dropdownBtn.addEventListener("click", () => {
    dropdownOptions.classList.toggle("active")
  })

  // Xử lý sự kiện khi chọn một tùy chọn
  filterMark.querySelectorAll(".dropdown-options li").forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value")
      const text = option.textContent

      // Hiển thị giá trị đã chọn
      dropdownValue.textContent = text

      // Ẩn danh sách tùy chọn
      dropdownOptions.classList.remove("active")

      // In giá trị ra console (hoặc dùng để xử lý logic khác)
      console.log("Selected:", value)
    })
  })

  // Đóng dropdown khi click ra ngoài
  filterMark.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownOptions.contains(e.target)) {
      dropdownOptions.classList.remove("active")
    }
  })
}
