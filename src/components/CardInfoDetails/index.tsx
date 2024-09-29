import { UserSearch } from '@/model';
import styles from './CardInfoDetails.module.scss';
import { useDetailsUser } from '@/hooks';
import { RenderConditional, Spinner } from '@/components';
import { useState } from 'react';

type CardInfoDetailsProps = {
  data: UserSearch;
};

const CardInfoDetails = ({ data }: CardInfoDetailsProps): JSX.Element => {
  const [seeDetails, setSeeDetails] = useState<boolean>(false);
  const { usersDetails, isLoading, isValidating } = useDetailsUser(seeDetails, data.username);

  return (
    <div className={styles.CardContainer}>
      <img className={styles.ProfileImage} src={data.imgProfile} alt="profile-image-user" />

      <div className={styles.ContainerInfoDetails}>
        {isLoading && isValidating ? (
          <div style={{ margin: 'auto' }}>
            <Spinner />
          </div>
        ) : null}

        <RenderConditional condition={seeDetails == true}>
          <div className={styles.RowNameandDateJoined}>
            <h2>{usersDetails?.name}</h2>
            <p>{usersDetails?.dateJoined}</p>
          </div>
        </RenderConditional>
        <a href={data.htmlprofile} className={styles.LinkUsername} target="_blank">
          <h3 className={styles.UsernameInfo}>@{data.username}</h3>
        </a>

        <RenderConditional condition={seeDetails == true}>
          <p className={styles.BioInfo}>{usersDetails?.bio ? usersDetails?.bio : 'This profile has no bio'}</p>
          <div className={styles.InfoDetailsNumbers}>
            <div className={styles.ItemNumberDetail}>
              <h3>Repos</h3>
              <h1>{usersDetails?.numberRepo}</h1>
            </div>
            <div className={styles.ItemNumberDetail}>
              <h3>Followers</h3>
              <h1>{usersDetails?.followers}</h1>
            </div>
            <div className={styles.ItemNumberDetail}>
              <h3>Following</h3>
              <h1>{usersDetails?.following}</h1>
            </div>
            <div className={styles.ItemNumberDetail}>
              <h3>Gists</h3>
              <h1>{usersDetails?.numberGist}</h1>
            </div>
          </div>
          <div className={styles.SocialAditionalInfo}>
            <div className={styles.ItemSocial}>
              <span className="material-symbols-outlined">location_on</span>
              <h3>{usersDetails?.location ?? 'Not Available'}</h3>
            </div>
            <div className={styles.ItemSocial}>
              <span className="material-symbols-outlined">mail</span>
              <h3>{usersDetails?.email ?? 'Not Available'}</h3>
            </div>
            <div className={styles.ItemSocial}>
              <span className="material-symbols-outlined">link</span>
              <a href={usersDetails?.blog ?? ''} target="_blank">
                {usersDetails?.blog ?? 'Not Available'}
              </a>
            </div>
            <div className={styles.ItemSocial}>
              <span className="material-symbols-outlined">apartment</span>
              <h3>{usersDetails?.company ?? 'Not Available'}</h3>
            </div>
          </div>
        </RenderConditional>
        <RenderConditional condition={seeDetails == false}>
          <button
            className={styles.InfoButtonDetail}
            onClick={() => {
              setSeeDetails(true);
            }}
          >
            Details
            <span className="material-symbols-outlined">info</span>
          </button>
        </RenderConditional>
      </div>
    </div>
  );
};

export default CardInfoDetails;
