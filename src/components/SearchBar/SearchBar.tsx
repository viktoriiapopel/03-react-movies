
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface Props {
  onSubmit: (formData: FormData) => void;
}

export default function SearchBar({ onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = (formData.get("query") as string | null)?.trim();
    
        if (!query) {
          toast.error("Please enter your search query.");
          return;
    }
    
    onSubmit(formData);
    e.currentTarget.reset();
  };
  return (
    <header className={styles.header}>
 <div className={styles.container}>
 <a
 className={styles.link}
 href="https://www.themoviedb.org/"
 target="_blank"
 rel="noopener noreferrer"
 >
 Powered by TMDB
 </a>
 <form className={styles.form} onSubmit={handleSubmit}>
 <input
 className={styles.input}
 type="text"
 name="query"
 autoComplete="off"
 placeholder="Search movies..."
 autoFocus
/>
 <button className={styles.button} type="submit">
 Search
 </button>
 </form>
 </div>
</header>
  );
};