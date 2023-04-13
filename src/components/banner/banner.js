import './banner.scss'

export default function Banner({selector, desc}) {

	return (
		<section className={selector ? selector : 'banner'}>
			{desc.length && <p>{desc}</p>}
		</section>
	)
}