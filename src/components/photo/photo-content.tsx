"use client";
// import PhotoComments from "./PhotoComments";
import styles from "./photo-content.module.css";
import Link from "next/link";
import { useUser } from "@/context/user-context";
import { PhotoDelete } from "./photo-delete";
import Image from "next/image";
import { PhotoData } from "@/actions/get-photo";

type Props = {
  data: PhotoData;
  single: boolean;
};

export const PhotoContent = ({ data, single }: Props) => {
  const { user } = useUser();
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={String(photo.id)} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualization}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      {/* <PhotoComments single={single} id={photo.id} comments={comments} /> */}
    </div>
  );
};