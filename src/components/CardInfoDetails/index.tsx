import { UserSearch } from '@/model';
import styles from './CardInfoDetails.module.scss';
import { useState } from 'react';

type CardInfoDetailsProps = {
  data: UserSearch;
};

const CardInfoDetails = ({ data }: CardInfoDetailsProps): JSX.Element => {
  const [moreDetails, setMoreDetails] = useState<boolean>(false);

  return (
    <div className={styles.CardContainer}>
      <img className={styles.ProfileImage} src={data.imgProfile} alt="profile-image-user" />
      <div className={styles.ContainerInfoDetails}>
        {/* <div className={styles.RowNameandDateJoined}>
          <h2>sdsddsdsd</h2>
          <p>sds</p>
        </div> */}
        <h3 className={styles.UsernameInfo}>@{data.username}</h3>
        {/* <p className={styles.BioInfo}>This profile has no bio</p>
        <div className={styles.InfoDetailsNumbers}>
          <div className={styles.ItemNumberDetail}>
            <h3>sdsd</h3>
            <h1>sds</h1>
          </div>
          <div className={styles.ItemNumberDetail}>
            <h3>sdsd</h3>
            <h1>sds</h1>
          </div>
          <div className={styles.ItemNumberDetail}>
            <h3>sdsd</h3>
            <h1>sds</h1>
          </div>
        </div> */}
        <button>
          <span className="material-symbols-outlined">info</span>
        </button>
      </div>
    </div>
  );
};

export default CardInfoDetails;
