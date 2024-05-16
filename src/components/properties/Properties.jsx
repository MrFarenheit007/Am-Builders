import { PostData } from '../../constants'
import { Properties_Card } from '../../containers'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import './properties.css'


const Properties = () => {
  const postData = PostData
  return (
    <motion.div className='properties' id='properties'
      variants={fadeIn('right', 0.7)}
      initial='hidden'
      animate='show'
      exit='hidden'>

      <h1 className='prop_heading'>Best Deals</h1>
      <div className='prop-card'>
        {postData.map((post) => (
          <Properties_Card
            key={post.id}
            post={post}
            id={post.id}
            name={post.name}
            price={post.price}
            city={post.city}
            area={post.area}
            image={post.image}
            description={post.description}
          />
        ))}
      </div>
    </motion.div>


  )
}

export default Properties