const daysDifference = (date) =>
  parseInt(Math.round((new Date() - new Date(date)) / (1000 * 60 * 60 * 24)))

export const getDays = (date) => {
  let days = daysDifference(date)
  let dayCount
  if (days === 0) dayCount = 'few hours ago'
  else if (days === 1) {
    dayCount = '1 day ago'
  } else if (days < 7) dayCount = `${days} days ago`
  else if (days < 14) dayCount = `1 week ago`
  else if (days < 30) dayCount = `${Math.floor(days / 7)} weeks ago`
  else if (days < 60) dayCount = `1 month ago`
  else if (days < 365) dayCount = `${Math.floor(days / 30)} months ago`
  else if (days < 730) dayCount = `1 year ago`
  else if (days >= 730) dayCount = `${Math.floor(days / 365)} years ago`
  return dayCount
}
