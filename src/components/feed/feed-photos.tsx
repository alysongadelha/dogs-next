import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";
import { Photo } from "@/actions/get-photos";

type Props = {
  photos: Photo[];
};

export const FeedPhotos = ({ photos }: Props) => {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, index) =>
        photo?.src ? (
          <li className={styles.photo} key={photo.id + index}>
            <Link href={`/photo/${photo.id}`} scroll={false}>
              <Image
                src={photo.src}
                width={1500}
                height={1500}
                alt={photo.title}
                sizes="80vh"
              />
              <span className={styles.visualization}>{photo.acessos}</span>
            </Link>
          </li>
        ) : (
          <p key={photo.id + index}>Image without source</p>
        )
      )}
    </ul>
  );
};
