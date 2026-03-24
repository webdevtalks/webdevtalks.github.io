import { useEffect } from 'react'

export const useAnchorLinks = () => {
  // Function to copy anchor link to clipboard
  const copyAnchorLink = async (sectionId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`
    try {
      await navigator.clipboard.writeText(url)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
  }

  // Function to scroll to element with header offset
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerHeight = 80 // Height of the sticky header + some padding
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Scroll to anchor on page load with header offset
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        scrollToElement(hash.substring(1))
      }, 100)
    }
  }, [])

  return {
    copyAnchorLink,
    scrollToElement
  }
}