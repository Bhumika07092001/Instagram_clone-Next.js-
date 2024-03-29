import Navbar from "@/components/Nav/NavBar";
import Footer from "@/components/Footer/Footer";
import Posts from "@/components/posts/posts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
}
