
import styles from './services.module.scss'
import { RiCarWashingLine, RiPoliceCarLine } from "react-icons/ri";
import {
  MdOutlineDirectionsCar,
  MdOutlineDirectionsCarFilled,
} from "react-icons/md";
export  const servicesData=[
    {
      logo: <RiCarWashingLine size={40} className={styles.logo} />,
      title: 'Wedding Ceremony ', 
      text: ` A small river named Duden flows by their place and supplies it
      with the necessary regelialia.`
    },
    {
      logo:     <RiPoliceCarLine size={40} className={styles.logo} />,
      title: 'Airport Transfer ', 
      text: `  A small river named Duden flows by their place and supplies it
      with the necessary regelialia.`
    },
    {
      logo:   <MdOutlineDirectionsCar size={40} className={styles.logo} />,
      title: 'City Transfer ', 
      text: `  A small river named Duden flows by their place and supplies it
      with the necessary regelialia.`
    },
    {
      logo:  <MdOutlineDirectionsCarFilled size={40} className={styles.logo} />,
      title: 'City Tour ', 
      text: `   A small river named Duden flows by their place and supplies it
      with the necessary regelialia.`
    },

  ]