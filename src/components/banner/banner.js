import './banner.scss'

export default function Banner({ image, desc, bannerClass }) {
    return (
      <section className={`banner ${bannerClass}`} style={{ backgroundImage: `url(${image})`}}>
        {desc && <p>{desc}</p>}
      </section>
    )
}