import { redirect } from 'next/navigation'

export async function GET(request) {
  const res = await fetch('https://api.github.com/repos/fukamachi/qlot/releases/latest')
  const data = await res.json();
  const installer = data.assets.find(asset => asset.name.match(/^qlot-installer-.+\.sh$/))
  redirect(installer.browser_download_url)
}
