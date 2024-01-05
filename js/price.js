const price_range_min = document.getElementById('price_range_min')
const price_range_max = document.getElementById('price_range_max')
const price_progress = document.getElementById('progress')
const price_num_min = document.getElementById('price_num_min')
const price_num_max = document.getElementById('price_num_max')

const makePriceSlider = () => {
  var gap = 1000
  var price_max = price_range_min.max

  price_range_min.oninput = () => {
    var diff = price_range_max.value - price_range_min.value
    if (diff < gap) {
      price_range_min.value = parseInt(price_range_max.value) - gap
    }else{
      price_progress.style.left = `${(price_range_min.value * 100) / price_max}%`
    }
    price_num_min.innerHTML = (price_range_min.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  price_range_max.oninput = () => {
    var diff = price_range_max.value - price_range_min.value
    if (diff < gap) {
      price_range_max.value = parseInt(price_range_min.value) + gap
    }
    price_progress.style.right = `${100 - ((price_range_max.value * 100) / price_max)}%`
    price_num_max.innerHTML = (price_range_max.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
}
makePriceSlider()


