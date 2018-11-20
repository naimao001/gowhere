try {
	var defaultCity = localStorage.city || "北京"
} catch (error) {}

export default {
  city:defaultCity
}
