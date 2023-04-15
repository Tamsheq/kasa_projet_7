import './banner.scss'

export default function Banner({ image, desc }) {
  return (
    <section className="banner" style={{ backgroundImage: `url(${image})`}}>
      {desc && <p>{desc}</p>}
    </section>
  )
}