const useInsertCss = (css: { [key: string]: string }) => {
  let customStyle: HTMLStyleElement | null = document.getElementById(
    'custom-style'
  ) as HTMLStyleElement | null

  if (!document.getElementById('custom-style')) {
    customStyle = document.createElement('style')
    customStyle.setAttribute('data-id', 'custom-style')
    customStyle.type = 'text/css'
  }

  let text = ''
  for (const [key, value] of Object.entries(css)) {
    text += `--${key}: ${value};\n`
  }
  if (customStyle !== null) {
    customStyle.textContent = `\n:root{\n${text}\n}\n`
    document.head.appendChild(customStyle)
  }
}

export default useInsertCss
