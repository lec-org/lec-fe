import { FUZZY_TELEPHONE_NUMBER, LOOSE_TELEPHONE_NUMBER } from './regex'

export default function formatAccount(account: string): string {
  const trim_str = account
    .split('')
    .filter((char) => char !== ' ')
    .join('')
  if (LOOSE_TELEPHONE_NUMBER.test(trim_str) || FUZZY_TELEPHONE_NUMBER.test(trim_str)) {
    console.log('format phone number')
    const phone = formatPhoneNumber(trim_str)
    console.log(phone)
    return phone
  }
  return trim_str
}

function formatPhoneNumber(phone: string) {
  console.log('format phone number', phone)
  if (phone.length >= 12) return phone.slice(0, 12)

  const res_tel = `${phone}`
    .replace(/\s+/, '')
    .split('')
    .filter((num) => /\d/.test(num))

  if (res_tel.length >= 4) res_tel.splice(3, 0, ' ')

  if (res_tel.length >= 9) res_tel.splice(8, 0, ' ')

  return res_tel.join('')
}
