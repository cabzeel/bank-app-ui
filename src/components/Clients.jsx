
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap  w-full flex-row`}>
      {clients.map(({id, logo}) => (
        <div key={id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={logo} alt="__logo" className="sm:w-[192px] w-[190px] object-contain p-3"/>
        </div>
      ))}
    </div>
  </section>
)

export default Clients