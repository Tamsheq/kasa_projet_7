import './list.scss'
import datas from '../../data/data'
import Card from '../card/Card'

// le composant List va permettre de boucler à travers chaque objet et afficher les éléments dans Card
// .map permet de parcourir le tableau "datas" en passant les valeurs suivantes
export default function List() {

    return (
        <main className='list_home'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}