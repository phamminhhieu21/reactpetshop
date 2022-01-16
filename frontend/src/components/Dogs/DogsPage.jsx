import DogsCard from "./DogsCard";
import './Dogs.css'
const DogsPage = (props) => {
    const{allDogs} = props;
    console.log(allDogs);
    return ( 
        <>
            <section className='dogs-container'>
                {allDogs.map(dog => {
                    return(
                        <>  
                            <div  key={dog.id}>
                               <DogsCard
                                  id={dog.id}
                                  name={dog.name}
                                  breed={dog.breed}
                                  src={dog.imageUrl}
                                  desc={dog.description}
                                  price={dog.price}
                               />

                            </div>
                           
                        </>
                    )
                })}
            </section>
        </>
     );
}
 
export default DogsPage;